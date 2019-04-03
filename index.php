<?php
  Mage::app()->setCurrentStore(Mage_Core_Model_App::ADMIN_STORE_ID);
  $collection = Mage::getModel('catalog/category')
                    ->load($categoryId)
                    ->getProductCollection();
  


