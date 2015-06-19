class Task < ActiveRecord::Base
  validates :content, presence: true

  def self.find_next_position
    order = self.order(:position)
    last_position = order.last.position
    
    return last_position + 1

  end
end
