class MakeTeamIdNotNullable < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :team_id, :integer, null: false
  end
end
