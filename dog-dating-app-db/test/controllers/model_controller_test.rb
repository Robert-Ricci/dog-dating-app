require 'test_helper'

class ModelControllerTest < ActionDispatch::IntegrationTest
  test "should get user" do
    get model_user_url
    assert_response :success
  end

end
