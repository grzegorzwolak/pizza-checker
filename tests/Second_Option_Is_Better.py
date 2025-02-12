from config import *
from selenium import webdriver
from selenium.webdriver.common.by import By



def Second_Option_Is_Better(url):
    driver = webdriver.Chrome()
    driver.get(url)

    first_option_amount_input = driver.find_element(By.ID, 'first')
    first_option_radius_input = driver.find_element(By.NAME, 'first')

    second_option_amount_input = driver.find_element(By.ID, 'second')
    second_option_radius_input = driver.find_element(By.NAME, 'second')

    first_option_amount_value = '2'
    first_option_radius_value = '32'
    second_option_amount_value = '1'
    second_option_radius_value = '55'

    try:

        first_option_amount_input.send_keys(first_option_amount_value)
        first_option_radius_input.send_keys(first_option_radius_value)
        second_option_amount_input.send_keys(second_option_amount_value)
        second_option_radius_input.send_keys(second_option_radius_value)

        check_btn = driver.find_element(By.CLASS_NAME, 'check-btn')
        check_btn.click()

        driver.implicitly_wait(0.5)

        message = driver.find_element(By.CLASS_NAME, 'result')
        text = message.text
        print(text)
    
    except Exception:

        print(Exception)

        driver.save_screenshot(f'tests/screenshots/{time}.png')

    driver.quit()


Second_Option_Is_Better(URL)
