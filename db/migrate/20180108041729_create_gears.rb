class CreateGears < ActiveRecord::Migration[5.1]
  def change
    create_table :gears do |t|
      t.string :name
      t.text :description
      t.string :category
      t.string :image

      t.timestamps
    end
  end
end
