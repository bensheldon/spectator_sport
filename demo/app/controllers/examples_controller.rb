class ExamplesController < ApplicationController
  ExampleError = Class.new(StandardError)

  def index
  end

  def new
    @resource = FakeModel.new
  end

  def create
    resource_params = params.require(:resource).permit(:name, :message)
    @resource = FakeModel.new(resource_params)
  end

  class FakeModel
    include ActiveModel::Model
    attr_accessor :name, :message

    def self.model_name
      ActiveModel::Name.new(self, nil, "Resource")
    end
  end

  def recording_context
  end

  # This endpoint serves for testing behavior when an error page is encountered
  def error
    request.env["action_dispatch.show_detailed_exceptions"] = false
    raise ExampleError
  end

  private

  def show_detailed_exceptions?
    action_name == "error" ? false : super
  end
end
