from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models


class Thing(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    slug = models.SlugField(unique=True)
    user = models.OneToOneField(User, blank=True, null=True)

    def __unicode__(self):
        return self.name


class Social(models.Model):
    SOCIAL_TYPES = (
        ('twitter', 'Twitter'),
        ('facebook', 'Facebook'),
        ('pinterest', 'Pinterest'),
        ('instagram', 'Instagram'),
    )

    network = models.CharField(max_length=255, choices=SOCIAL_TYPES)
    username = models.CharField(max_length=255)
    thing = models.ForeignKey(Thing,
        on_delete=CASCADE, related_name="social_accounts")
    
    # where we're overriding the admin name
    class Meta:
        verbose_name_plural = "Social media links"
