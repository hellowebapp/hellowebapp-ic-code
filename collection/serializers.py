from rest_framework import serializers

from collection.models import Thing


class ThingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Thing
        fields = ('name', 'description', 'slug',)
