from peewee import *
import os
from playhouse.db_url import connect

if 'DATABASE_URL' in os.environ:
    DATABASE = connect(os.environ.get('DATABASE_URL'))
else:
    DATABASE = PostgresqlDatabase('quick_share_db')

def initialize(tables):
    DATABASE.connect()
    DATABASE.create_tables(tables, safe=True)
    print('your tables were created!')
    DATABASE.close()