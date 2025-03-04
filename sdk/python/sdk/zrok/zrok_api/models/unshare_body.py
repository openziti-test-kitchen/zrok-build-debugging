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

class UnshareBody(object):
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
        'env_zid': 'str',
        'share_token': 'str',
        'reserved': 'bool'
    }

    attribute_map = {
        'env_zid': 'envZId',
        'share_token': 'shareToken',
        'reserved': 'reserved'
    }

    def __init__(self, env_zid=None, share_token=None, reserved=None):  # noqa: E501
        """UnshareBody - a model defined in Swagger"""  # noqa: E501
        self._env_zid = None
        self._share_token = None
        self._reserved = None
        self.discriminator = None
        if env_zid is not None:
            self.env_zid = env_zid
        if share_token is not None:
            self.share_token = share_token
        if reserved is not None:
            self.reserved = reserved

    @property
    def env_zid(self):
        """Gets the env_zid of this UnshareBody.  # noqa: E501


        :return: The env_zid of this UnshareBody.  # noqa: E501
        :rtype: str
        """
        return self._env_zid

    @env_zid.setter
    def env_zid(self, env_zid):
        """Sets the env_zid of this UnshareBody.


        :param env_zid: The env_zid of this UnshareBody.  # noqa: E501
        :type: str
        """

        self._env_zid = env_zid

    @property
    def share_token(self):
        """Gets the share_token of this UnshareBody.  # noqa: E501


        :return: The share_token of this UnshareBody.  # noqa: E501
        :rtype: str
        """
        return self._share_token

    @share_token.setter
    def share_token(self, share_token):
        """Sets the share_token of this UnshareBody.


        :param share_token: The share_token of this UnshareBody.  # noqa: E501
        :type: str
        """

        self._share_token = share_token

    @property
    def reserved(self):
        """Gets the reserved of this UnshareBody.  # noqa: E501


        :return: The reserved of this UnshareBody.  # noqa: E501
        :rtype: bool
        """
        return self._reserved

    @reserved.setter
    def reserved(self, reserved):
        """Sets the reserved of this UnshareBody.


        :param reserved: The reserved of this UnshareBody.  # noqa: E501
        :type: bool
        """

        self._reserved = reserved

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
        if issubclass(UnshareBody, dict):
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
        if not isinstance(other, UnshareBody):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
