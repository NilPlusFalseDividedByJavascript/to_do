class Task < ActiveRecord::Base
  validates :content, presence: true

  
  def self.find_next_position
    order = self.order(:position)
    last = order.last

    if last && last.position
      return last.position + 1
    else
      return 1
    end
  end
end
