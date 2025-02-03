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

class InlineResponse2004Organizations(object):
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
        'token': 'str',
        'description': 'str'
    }

    attribute_map = {
        'token': 'token',
        'description': 'description'
    }

    def __init__(self, token=None, description=None):  # noqa: E501
        """InlineResponse2004Organizations - a model defined in Swagger"""  # noqa: E501
        self._token = None
        self._description = None
        self.discriminator = None
        if token is not None:
            self.token = token
        if description is not None:
            self.description = description

    @property
    def token(self):
        """Gets the token of this InlineResponse2004Organizations.  # noqa: E501


        :return: The token of this InlineResponse2004Organizations.  # noqa: E501
        :rtype: str
        """
        return self._token

    @token.setter
    def token(self, token):
        """Sets the token of this InlineResponse2004Organizations.


        :param token: The token of this InlineResponse2004Organizations.  # noqa: E501
        :type: str
        """

        self._token = token

    @property
    def description(self):
        """Gets the description of this InlineResponse2004Organizations.  # noqa: E501


        :return: The description of this InlineResponse2004Organizations.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this InlineResponse2004Organizations.


        :param description: The description of this InlineResponse2004Organizations.  # noqa: E501
        :type: str
        """

        self._description = description

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
        if issubclass(InlineResponse2004Organizations, dict):
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
        if not isinstance(other, InlineResponse2004Organizations):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
