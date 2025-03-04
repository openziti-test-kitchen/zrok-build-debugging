# coding: utf-8

"""
    zrok

    zrok client access  # noqa: E501

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class ShareBody(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'share_token': 'str',
        'backend_proxy_endpoint': 'str',
        'add_access_grants': 'list[str]',
        'remove_access_grants': 'list[str]'
    }

    attribute_map = {
        'share_token': 'shareToken',
        'backend_proxy_endpoint': 'backendProxyEndpoint',
        'add_access_grants': 'addAccessGrants',
        'remove_access_grants': 'removeAccessGrants'
    }

    def __init__(self, share_token=None, backend_proxy_endpoint=None, add_access_grants=None, remove_access_grants=None):  # noqa: E501
        """ShareBody - a model defined in Swagger"""  # noqa: E501
        self._share_token = None
        self._backend_proxy_endpoint = None
        self._add_access_grants = None
        self._remove_access_grants = None
        self.discriminator = None
        if share_token is not None:
            self.share_token = share_token
        if backend_proxy_endpoint is not None:
            self.backend_proxy_endpoint = backend_proxy_endpoint
        if add_access_grants is not None:
            self.add_access_grants = add_access_grants
        if remove_access_grants is not None:
            self.remove_access_grants = remove_access_grants

    @property
    def share_token(self):
        """Gets the share_token of this ShareBody.  # noqa: E501


        :return: The share_token of this ShareBody.  # noqa: E501
        :rtype: str
        """
        return self._share_token

    @share_token.setter
    def share_token(self, share_token):
        """Sets the share_token of this ShareBody.


        :param share_token: The share_token of this ShareBody.  # noqa: E501
        :type: str
        """

        self._share_token = share_token

    @property
    def backend_proxy_endpoint(self):
        """Gets the backend_proxy_endpoint of this ShareBody.  # noqa: E501


        :return: The backend_proxy_endpoint of this ShareBody.  # noqa: E501
        :rtype: str
        """
        return self._backend_proxy_endpoint

    @backend_proxy_endpoint.setter
    def backend_proxy_endpoint(self, backend_proxy_endpoint):
        """Sets the backend_proxy_endpoint of this ShareBody.


        :param backend_proxy_endpoint: The backend_proxy_endpoint of this ShareBody.  # noqa: E501
        :type: str
        """

        self._backend_proxy_endpoint = backend_proxy_endpoint

    @property
    def add_access_grants(self):
        """Gets the add_access_grants of this ShareBody.  # noqa: E501


        :return: The add_access_grants of this ShareBody.  # noqa: E501
        :rtype: list[str]
        """
        return self._add_access_grants

    @add_access_grants.setter
    def add_access_grants(self, add_access_grants):
        """Sets the add_access_grants of this ShareBody.


        :param add_access_grants: The add_access_grants of this ShareBody.  # noqa: E501
        :type: list[str]
        """

        self._add_access_grants = add_access_grants

    @property
    def remove_access_grants(self):
        """Gets the remove_access_grants of this ShareBody.  # noqa: E501


        :return: The remove_access_grants of this ShareBody.  # noqa: E501
        :rtype: list[str]
        """
        return self._remove_access_grants

    @remove_access_grants.setter
    def remove_access_grants(self, remove_access_grants):
        """Sets the remove_access_grants of this ShareBody.


        :param remove_access_grants: The remove_access_grants of this ShareBody.  # noqa: E501
        :type: list[str]
        """

        self._remove_access_grants = remove_access_grants

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ShareBody, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ShareBody):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
