class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.boolean :match, default: false

      t.timestamps
    end
  end
end
