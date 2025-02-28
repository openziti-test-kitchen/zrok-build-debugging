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

class SparklinesBody(object):
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
        'account': 'bool',
        'environments': 'list[str]',
        'shares': 'list[str]'
    }

    attribute_map = {
        'account': 'account',
        'environments': 'environments',
        'shares': 'shares'
    }

    def __init__(self, account=None, environments=None, shares=None):  # noqa: E501
        """SparklinesBody - a model defined in Swagger"""  # noqa: E501
        self._account = None
        self._environments = None
        self._shares = None
        self.discriminator = None
        if account is not None:
            self.account = account
        if environments is not None:
            self.environments = environments
        if shares is not None:
            self.shares = shares

    @property
    def account(self):
        """Gets the account of this SparklinesBody.  # noqa: E501


        :return: The account of this SparklinesBody.  # noqa: E501
        :rtype: bool
        """
        return self._account

    @account.setter
    def account(self, account):
        """Sets the account of this SparklinesBody.


        :param account: The account of this SparklinesBody.  # noqa: E501
        :type: bool
        """

        self._account = account

    @property
    def environments(self):
        """Gets the environments of this SparklinesBody.  # noqa: E501


        :return: The environments of this SparklinesBody.  # noqa: E501
        :rtype: list[str]
        """
        return self._environments

    @environments.setter
    def environments(self, environments):
        """Sets the environments of this SparklinesBody.


        :param environments: The environments of this SparklinesBody.  # noqa: E501
        :type: list[str]
        """

        self._environments = environments

    @property
    def shares(self):
        """Gets the shares of this SparklinesBody.  # noqa: E501


        :return: The shares of this SparklinesBody.  # noqa: E501
        :rtype: list[str]
        """
        return self._shares

    @shares.setter
    def shares(self, shares):
        """Sets the shares of this SparklinesBody.


        :param shares: The shares of this SparklinesBody.  # noqa: E501
        :type: list[str]
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
        if issubclass(SparklinesBody, dict):
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
        if not isinstance(other, SparklinesBody):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
