from config import *
from selenium import webdriver
from selenium.webdriver.common.by import By

def All_Fields_Are_Empty(url):
    
    driver = webdriver.Chrome()
    driver.get(url)

    try:

        check_btn = driver.find_element(By.CLASS_NAME, 'check-btn')
        check_btn.click()

        driver.implicitly_wait(0.5)

        message = driver.find_element(By.CLASS_NAME, 'error')
        text = message.text
        print(text)
    
    except Exception:

        print(Exception)

        driver.save_screenshot(f'tests/screenshots/All_Fields_Are_Empty_{time}.png')

    driver.quit()


All_Fields_Are_Empty(URL)