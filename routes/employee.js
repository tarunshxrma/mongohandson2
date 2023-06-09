const { getData, getSalaryData, getExpData, getGradExpData, updateSalary, deleteData, addData } = require('../controller/employee');
const router=require("express").Router();

router.post("/add_data", addData);
router.get("/all_data", getData);
router.get("/salary_data", getSalaryData);
router.get("/exp_data", getExpData);
router.get("/grad_exp_data", getGradExpData);
router.put("/update_salary", updateSalary);
router.delete("/delete_data", deleteData);

module.exports=router;