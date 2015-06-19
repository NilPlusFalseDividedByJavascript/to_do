json.array!(@tasks) do |task|
  json.extract! task, :id, :content, :due_date, :position
  json.url task_url(task, format: :json)
end
