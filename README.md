Trabalho PO

Rodar BACKEND

pip3 install virtualenv
virtualenv env
. env/bin/activate

pip install -r requirements.txt

python manage.py runserver 0.0.0.0:8000

RODAR APP

cd app
yarn install
expo start