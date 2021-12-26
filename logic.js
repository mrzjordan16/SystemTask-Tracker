module.exports=class Logic {
    constructor(){
        this.isLogin=false;
        this.recentTask=[];
        this.completeTask=[];
        this.alert=["dark","info","danger","warning","success"]
        this.status=["Not Started","Started","Halted","On-Going","Completed"]
    }
    getRecentTask(){
        return this.recentTask;
    }
    TaskHelperFunction(ID,EmployeeName,Area,SubArea,Type,Project,TaskDetail,Status,CoEmployee,AssignedDate,StartDate,Deadline,EndDate,AssignedBy,Comments){
        let index=this.status.findIndex(x=>x==Status);
        return {"ID":ID,"EmployeeName":EmployeeName,"Area":Area,"SubArea":SubArea,"Type":Type,"Project":Project,"TaskDetail":TaskDetail,"Status":this.status[index],"StatusColor":this.alert[index],"CoEmployee":CoEmployee,"AssignedDate":AssignedDate,"StartDate":StartDate,"Deadline":Deadline,"EndDate":EndDate,"AssignedBy":AssignedBy,"Comments":Comments};
    }

    isUserLogin(){
        this.isLogin=true;
        return this.isLogin;
    }

    getRecentTaskCompleted(){
        this.recentTask=[];        
        let recentTaskObj=this.TaskHelperFunction("R1","Osman Shaikh","Pipelines","Jenkins","Implementation","Regenron","PWD Deployment Documentation and Estimation and Implementation","On-Going","Arslan/Alina","8/10/2021","8/10/2021","","","Shoaib Masood","Deployments are done, need further configurations and changes");
        this.recentTask.push(recentTaskObj);
    }

    getCompleteTaskSheet(){
        this.completeTask=[];  
        let recentTaskObj=this.TaskHelperFunction("R1","Osman Shaikh","Pipelines","Jenkins","Implementation","Regenron","PWD Deployment Documentation and Estimation and Implementation","On-Going","Arslan/Alina","8/10/2021","8/10/2021","","","Shoaib Masood","Deployments are done, need further configurations and changes");
        this.completeTask.push(recentTaskObj);
    }

    signOut(){
        this.isLogin=false;
        return this.isLogin;
    }

}

