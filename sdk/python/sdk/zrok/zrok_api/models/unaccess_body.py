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

class UnaccessBody(object):
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
        'frontend_token': 'str',
        'env_zid': 'str',
        'shr_token': 'str'
    }

    attribute_map = {
        'frontend_token': 'frontendToken',
        'env_zid': 'envZId',
        'shr_token': 'shrToken'
    }

    def __init__(self, frontend_token=None, env_zid=None, shr_token=None):  # noqa: E501
        """UnaccessBody - a model defined in Swagger"""  # noqa: E501
        self._frontend_token = None
        self._env_zid = None
        self._shr_token = None
        self.discriminator = None
        if frontend_token is not None:
            self.frontend_token = frontend_token
        if env_zid is not None:
            self.env_zid = env_zid
        if shr_token is not None:
            self.shr_token = shr_token

    @property
    def frontend_token(self):
        """Gets the frontend_token of this UnaccessBody.  # noqa: E501


        :return: The frontend_token of this UnaccessBody.  # noqa: E501
        :rtype: str
        """
        return self._frontend_token

    @frontend_token.setter
    def frontend_token(self, frontend_token):
        """Sets the frontend_token of this UnaccessBody.


        :param frontend_token: The frontend_token of this UnaccessBody.  # noqa: E501
        :type: str
        """

        self._frontend_token = frontend_token

    @property
    def env_zid(self):
        """Gets the env_zid of this UnaccessBody.  # noqa: E501


        :return: The env_zid of this UnaccessBody.  # noqa: E501
        :rtype: str
        """
        return self._env_zid

    @env_zid.setter
    def env_zid(self, env_zid):
        """Sets the env_zid of this UnaccessBody.


        :param env_zid: The env_zid of this UnaccessBody.  # noqa: E501
        :type: str
        """

        self._env_zid = env_zid

    @property
    def shr_token(self):
        """Gets the shr_token of this UnaccessBody.  # noqa: E501


        :return: The shr_token of this UnaccessBody.  # noqa: E501
        :rtype: str
        """
        return self._shr_token

    @shr_token.setter
    def shr_token(self, shr_token):
        """Sets the shr_token of this UnaccessBody.


        :param shr_token: The shr_token of this UnaccessBody.  # noqa: E501
        :type: str
        """

        self._shr_token = shr_token

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
        if issubclass(UnaccessBody, dict):
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
        if not isinstance(other, UnaccessBody):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
