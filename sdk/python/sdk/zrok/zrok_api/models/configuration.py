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

class Configuration(object):
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
        'version': 'str',
        'tou_link': 'str',
        'invites_open': 'bool',
        'requires_invite_token': 'bool',
        'invite_token_contact': 'str'
    }

    attribute_map = {
        'version': 'version',
        'tou_link': 'touLink',
        'invites_open': 'invitesOpen',
        'requires_invite_token': 'requiresInviteToken',
        'invite_token_contact': 'inviteTokenContact'
    }

    def __init__(self, version=None, tou_link=None, invites_open=None, requires_invite_token=None, invite_token_contact=None):  # noqa: E501
        """Configuration - a model defined in Swagger"""  # noqa: E501
        self._version = None
        self._tou_link = None
        self._invites_open = None
        self._requires_invite_token = None
        self._invite_token_contact = None
        self.discriminator = None
        if version is not None:
            self.version = version
        if tou_link is not None:
            self.tou_link = tou_link
        if invites_open is not None:
            self.invites_open = invites_open
        if requires_invite_token is not None:
            self.requires_invite_token = requires_invite_token
        if invite_token_contact is not None:
            self.invite_token_contact = invite_token_contact

    @property
    def version(self):
        """Gets the version of this Configuration.  # noqa: E501


        :return: The version of this Configuration.  # noqa: E501
        :rtype: str
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this Configuration.


        :param version: The version of this Configuration.  # noqa: E501
        :type: str
        """

        self._version = version

    @property
    def tou_link(self):
        """Gets the tou_link of this Configuration.  # noqa: E501


        :return: The tou_link of this Configuration.  # noqa: E501
        :rtype: str
        """
        return self._tou_link

    @tou_link.setter
    def tou_link(self, tou_link):
        """Sets the tou_link of this Configuration.


        :param tou_link: The tou_link of this Configuration.  # noqa: E501
        :type: str
        """

        self._tou_link = tou_link

    @property
    def invites_open(self):
        """Gets the invites_open of this Configuration.  # noqa: E501


        :return: The invites_open of this Configuration.  # noqa: E501
        :rtype: bool
        """
        return self._invites_open

    @invites_open.setter
    def invites_open(self, invites_open):
        """Sets the invites_open of this Configuration.


        :param invites_open: The invites_open of this Configuration.  # noqa: E501
        :type: bool
        """

        self._invites_open = invites_open

    @property
    def requires_invite_token(self):
        """Gets the requires_invite_token of this Configuration.  # noqa: E501


        :return: The requires_invite_token of this Configuration.  # noqa: E501
        :rtype: bool
        """
        return self._requires_invite_token

    @requires_invite_token.setter
    def requires_invite_token(self, requires_invite_token):
        """Sets the requires_invite_token of this Configuration.


        :param requires_invite_token: The requires_invite_token of this Configuration.  # noqa: E501
        :type: bool
        """

        self._requires_invite_token = requires_invite_token

    @property
    def invite_token_contact(self):
        """Gets the invite_token_contact of this Configuration.  # noqa: E501


        :return: The invite_token_contact of this Configuration.  # noqa: E501
        :rtype: str
        """
        return self._invite_token_contact

    @invite_token_contact.setter
    def invite_token_contact(self, invite_token_contact):
        """Sets the invite_token_contact of this Configuration.


        :param invite_token_contact: The invite_token_contact of this Configuration.  # noqa: E501
        :type: str
        """

        self._invite_token_contact = invite_token_contact

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
        if issubclass(Configuration, dict):
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
        if not isinstance(other, Configuration):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
