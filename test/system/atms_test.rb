require "application_system_test_case"

class AtmsTest < ApplicationSystemTestCase
  setup do
    @atm = atms(:one)
  end

  test "visiting the index" do
    visit atms_url
    assert_selector "h1", text: "Atms"
  end

  test "creating a Atm" do
    visit atms_url
    click_on "New Atm"

    fill_in "Atm model", with: @atm.atm_model_id
    fill_in "Atm state", with: @atm.atm_state_id
    fill_in "Atm type", with: @atm.atm_type_id
    fill_in "Description", with: @atm.description
    fill_in "Manufactoring date", with: @atm.manufactoring_date
    fill_in "Serial number", with: @atm.serial_number
    click_on "Create Atm"

    assert_text "Atm was successfully created"
    click_on "Back"
  end

  test "updating a Atm" do
    visit atms_url
    click_on "Edit", match: :first

    fill_in "Atm model", with: @atm.atm_model_id
    fill_in "Atm state", with: @atm.atm_state_id
    fill_in "Atm type", with: @atm.atm_type_id
    fill_in "Description", with: @atm.description
    fill_in "Manufactoring date", with: @atm.manufactoring_date
    fill_in "Serial number", with: @atm.serial_number
    click_on "Update Atm"

    assert_text "Atm was successfully updated"
    click_on "Back"
  end

  test "destroying a Atm" do
    visit atms_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Atm was successfully destroyed"
  end
end
