<?php
$set = array();

if (!defined('QUICKSILVERFORUMS')) {
       header('HTTP/1.0 403 Forbidden');
       die;
}

$set['db_host'] = 'localhost';
$set['db_name'] = '';
$set['db_pass'] = '';
$set['db_port'] = '';
$set['db_socket'] = '';
$set['db_user'] = 'root';
$set['dbtype'] = 'mysqli';
$set['prefix'] = 'qsfp_';
$set['installed'] = '1';
$set['admin_email'] = '';
?>
