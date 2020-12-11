"""create matches tab

Revision ID: 75058ee0f258
Revises: 
Create Date: 2020-11-20 00:45:42.257296

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '75058ee0f258'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('matches',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('gameId', sa.BIGINT(), nullable=False),
    sa.Column('platformId', sa.String(length=40), nullable=False),
    sa.Column('gameCreation', sa.BIGINT(), nullable=False),
    sa.Column('gameDuration', sa.BIGINT(), nullable=False),
    sa.Column('queueId', sa.Integer(), nullable=False),
    sa.Column('seasonId', sa.Integer(), nullable=False),
    sa.Column('gameMode', sa.String(length=40), nullable=False),
    sa.Column('teams', sa.Text(), nullable=False),
    sa.Column('participants', sa.Text(), nullable=False),
    sa.Column('participantIdentities', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('gameId')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('matches')
    # ### end Alembic commands ###