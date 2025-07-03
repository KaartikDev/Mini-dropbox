import sqlite3
from datetime import datetime

import click

# 'g' is unique object for each request that hold datat cthat might be used by functions

from flask import current_app, g
def get_db():
    if 'db' not in g:
        #establishes connection to actual file at dtatabase key(actual fiel created elsewhere)
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            #rows behave like dictionaries
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row

    return g.db

#closes connection if g made one 
def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_db():
    #db is database connection
    db = get_db()
    #open resources opens schema relative to dir this python stored in (flaskr)
    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))

#calles init_db functions & prints success
@click.command('init-db')
def init_db_command():
    """Clear the existing data and create new tables."""
    init_db()
    click.echo('Initialized the database.')

#needed so python knows what to do with datetime vals
sqlite3.register_converter(
    "timestamp", lambda v: datetime.fromisoformat(v.decode())
)

def init_app(app):
    # teardown is for clean up
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)