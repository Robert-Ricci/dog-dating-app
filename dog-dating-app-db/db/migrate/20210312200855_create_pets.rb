class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.string :location
      t.string :biography
      t.string :breed
      t.string :likes
      t.string :dislikes
      t.string :temperament

      t.timestamps
    end
  end
end
