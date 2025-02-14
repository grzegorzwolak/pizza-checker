from config import *
from selenium import webdriver
from selenium.webdriver.common.by import By

def Clear_Fields(url):
    driver = webdriver.Chrome()
    driver.get(url)

    driver.implicitly_wait(0.5)

    first_option_amount_input = driver.find_element(By.ID, 'first')
    first_option_radius_input = driver.find_element(By.NAME, 'first')

    second_option_amount_input = driver.find_element(By.ID, 'second')
    second_option_radius_input = driver.find_element(By.NAME, 'second')

    first_option_amount_value = '3'
    first_option_radius_value = '32'
    second_option_amount_value = '2'
    second_option_radius_value = '35'

    try:
        first_option_amount_input.send_keys(first_option_amount_value)
        first_option_radius_input.send_keys(first_option_radius_value)
        second_option_amount_input.send_keys(second_option_amount_value)
        second_option_radius_input.send_keys(second_option_radius_value)


        driver.implicitly_wait(0.5)

        check_btn = driver.find_element(By.CLASS_NAME, 'check-btn')
        check_btn.click()

        driver.implicitly_wait(0.5)

        clear_btn = driver.find_element(By.CLASS_NAME, 'clear-btn')
        clear_btn.click()

    except Exception:

        print(Exception)
        screenshot_path = 'pizza-checker/tests/screenshots/Clear_Fields_' + str(time) + '.png'
        driver.save_screenshot(screenshot_path)

    driver.quit()


Clear_Fields(URL)