# A Simple Django Stack

A clean, organized stack for django development.

1. Added a simple authentication app<br>
2. Added Celery/RabbitMQ/Flower
3. Added Django Celery Beat for Handling Periodic Tasks
4. Added Gunicorn
5. Added Django Rest Framework

# To do
Add wagtail?
Add docker-compose<br>
Add adminer<br>
Add portainer<br>
Search for FrontEnd options<br>
Choose a cool template to the project<br>
Deploy with nginx and Gunicorn(https://docs.gunicorn.org/en/latest/deploy.html)


# Cool Packages to test
easy thumbnails - https://easy-thumbnails.readthedocs.io/en/latest/ref/processors/

# Development

run server<br>
```
python manage.py runserver
```

run server with Gunicorn<br>
```
gunicorn meuapp.wsgi
```

RabbitMQ on docker<br>
```
sudo docker run -d -p 5672:5672 rabbitmq
```

Celery<br>
```
celery -A meuapp worker -l info
```

Task Scheduler<br>
You can enter django admin panel and register periodic tasks.
```
celery -A proj beat -l info --scheduler django_celery_beat.schedulers:DatabaseScheduler
```
You can run both together with (using django-celery-beat database Scheduler):
```
celery -A proj worker --beat --scheduler django_celery_beat.schedulers:DatabaseScheduler
```

Flower<br>
```
celery -A meuapp flower
```
