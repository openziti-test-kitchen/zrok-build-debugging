package agent

import (
	"context"
	"errors"
	"github.com/openziti/zrok/agent/agentGrpc"
	"github.com/openziti/zrok/agent/proctree"
	"github.com/openziti/zrok/environment"
	"os"
)

func (i *agentGrpcImpl) ReservedShare(_ context.Context, req *agentGrpc.ReservedShareRequest) (*agentGrpc.ReservedShareReply, error) {
	root, err := environment.LoadRoot()
	if err != nil {
		return nil, err
	}

	if !root.IsEnabled() {
		return nil, errors.New("unable to load environment; did you 'zrok enable'?")
	}

	shrCmd := []string{os.Args[0], "share", "reserved", "--agent"}
	shr := &share{
		reserved:     true,
		bootComplete: make(chan struct{}),
		a:            i.a,
	}

	if req.OverrideEndpoint != "" {
		shrCmd = append(shrCmd, "--override-endpoint", req.OverrideEndpoint)
	}

	if req.Insecure {
		shrCmd = append(shrCmd, "--insecure")
	}
	shr.insecure = req.Insecure

	shrCmd = append(shrCmd, req.Token)
	shr.token = req.Token

	shr.process, err = proctree.StartChild(shr.tail, shrCmd...)
	if err != nil {
		return nil, err
	}

	go shr.monitor()
	<-shr.bootComplete

	if shr.bootErr == nil {
		i.a.inShares <- shr
		return &agentGrpc.ReservedShareReply{
			Token:             shr.token,
			BackendMode:       string(shr.backendMode),
			ShareMode:         string(shr.shareMode),
			FrontendEndpoints: shr.frontendEndpoints,
			Target:            shr.target,
		}, nil
	}

	return nil, shr.bootErr
}
