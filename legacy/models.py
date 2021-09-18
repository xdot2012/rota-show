from django.db import models

class Local(models.Model):
    name = models.CharField(max_length=30)
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    latitude = models.DecimalField(max_digits=22, decimal_places=16, blank=True, null=True)
    longitude = models.DecimalField(max_digits=22, decimal_places=16, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        unique_together = [['user', 'latitude', 'longitude']]