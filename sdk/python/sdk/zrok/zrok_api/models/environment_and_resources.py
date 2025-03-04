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

class EnvironmentAndResources(object):
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
        'environment': 'Environment',
        'frontends': 'Frontends',
        'shares': 'Shares'
    }

    attribute_map = {
        'environment': 'environment',
        'frontends': 'frontends',
        'shares': 'shares'
    }

    def __init__(self, environment=None, frontends=None, shares=None):  # noqa: E501
        """EnvironmentAndResources - a model defined in Swagger"""  # noqa: E501
        self._environment = None
        self._frontends = None
        self._shares = None
        self.discriminator = None
        if environment is not None:
            self.environment = environment
        if frontends is not None:
            self.frontends = frontends
        if shares is not None:
            self.shares = shares

    @property
    def environment(self):
        """Gets the environment of this EnvironmentAndResources.  # noqa: E501


        :return: The environment of this EnvironmentAndResources.  # noqa: E501
        :rtype: Environment
        """
        return self._environment

    @environment.setter
    def environment(self, environment):
        """Sets the environment of this EnvironmentAndResources.


        :param environment: The environment of this EnvironmentAndResources.  # noqa: E501
        :type: Environment
        """

        self._environment = environment

    @property
    def frontends(self):
        """Gets the frontends of this EnvironmentAndResources.  # noqa: E501


        :return: The frontends of this EnvironmentAndResources.  # noqa: E501
        :rtype: Frontends
        """
        return self._frontends

    @frontends.setter
    def frontends(self, frontends):
        """Sets the frontends of this EnvironmentAndResources.


        :param frontends: The frontends of this EnvironmentAndResources.  # noqa: E501
        :type: Frontends
        """

        self._frontends = frontends

    @property
    def shares(self):
        """Gets the shares of this EnvironmentAndResources.  # noqa: E501


        :return: The shares of this EnvironmentAndResources.  # noqa: E501
        :rtype: Shares
        """
        return self._shares

    @shares.setter
    def shares(self, shares):
        """Sets the shares of this EnvironmentAndResources.


        :param shares: The shares of this EnvironmentAndResources.  # noqa: E501
        :type: Shares
        """

        self._shares = shares

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
        if issubclass(EnvironmentAndResources, dict):
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
        if not isinstance(other, EnvironmentAndResources):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
