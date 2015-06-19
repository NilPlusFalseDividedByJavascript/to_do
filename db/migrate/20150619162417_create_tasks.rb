class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :content
      t.datetime :due_date
      t.integer :position

      t.timestamps null: false
    end
  end
end
