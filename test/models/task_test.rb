require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  setup do
    @task = tasks(:one)
  end

  test "assign next position" do
    assert_equal 1, @task.position
    assert_equal 3, Task.find_next_position
  end
end
