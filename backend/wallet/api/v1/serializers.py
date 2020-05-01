from rest_framework import serializers
from wallet.models import TaskerWallet, PaymentMethod, CustomerWallet


class TaskerWalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskerWallet
        fields = "__all__"


class PaymentMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentMethod
        fields = "__all__"


class CustomerWalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerWallet
        fields = "__all__"
