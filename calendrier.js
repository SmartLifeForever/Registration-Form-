var date, month, year, day
class Calendar{

    constructor(date){

        month= date.getMonth()

        year= date.getFullYear().toString()

        day= date.getDate()

        this.weeks=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

        this.el=document.createElement("div")

        this.el.className="cont"

        document.getElementsByTagName("center")[0].appendChild(this.el)

           this.title=document.createElement("div")

        this.title.className="title"

        this.title.innerText = date.toLocaleDateString("default",{year:"numeric",month:"long",day:"numeric"})

    active_day(date)

        this.el.appendChild(this.title)

        this.table=document.createElement("table")

        this.table.setAttribute("cellpadding",5)

        this.el.appendChild(this.table)

        for(let i=0;i<=6;i++){

            this.tr=document.createElement("tr")

            for(let x=0;x<=6;x++){

                if(i==0){

                    this.th=document.createElement("th")

                    this.th.innerText = this.weeks[x]

                    this.tr.appendChild(this.th)

                }

                else{

                    this.td=document.createElement("td")

                    this.td.addEventListener("click",function(){

            showDate(year,month,this.innerText,this)

        })

                    this.tr.appendChild(this.td)

                }

            }

            this.table.appendChild(this.tr)

            

        }

        active_day(date)

        days(year,month,day)

    }

}

function active_day(date){

var a_day=0

    document.querySelectorAll("th").forEach((self)=>{

        if(date.getDay()==a_day){

            self.classList.add("active_day")

        }

        else{

            self.classList.remove("active_day")

        }

        a_day++

    })

}

function days(year,month,date1){

    var first_day= new Date(year,month,1)

    a_day= 1

    date=1

    the_date= new Date(year,month,date1)

    total=new Date(year,month+1,0).getDate()

    document.querySelectorAll("td").forEach((self)=>{

        if(first_day.getDay()+1==a_day){

            self.innerText=date

            date++

        }

        else if(first_day.getDay()+1>a_day){

            self.innerText=""

        }

        else if(first_day.getDay()+1<a_day){

            if(date>total){

               self.innerText="" 

            }

            else{

                self.innerText=date

                if(date == new Date().getDate() && the_date.getMonth() == new Date().getMonth() && the_date.getFullYear() == new Date().getFullYear()){

                self.classList.add("active_date")

                

           }

                date++

            }

        }

        if(date1+1==date){

           self.classList.add("focus")

        }

        

        a_day++

})

}

function showDate(year,month,date,cont){

    if(date!=""){

    var fdate= new Date(year,month,date)

    document.getElementsByClassName("title")[0].innerText=fdate.toLocaleDateString("default",{year:"numeric",month:"long",day:"numeric"})

    document.querySelectorAll("td").forEach((self)=>{

        self.classList.remove("focus")

    })

    cont.classList.add("focus")

    active_day(fdate)

    }

}

window.onload=function(){

    date= new Date()

    new Calendar(date)

    document.getElementById("change").addEventListener("click",function(){

    var month= document.getElementById("month").selectedIndex-1

    var year= parseInt(document.getElementById("year").value)

    date= new Date(year,month,1)

    if(date!="Invalid Date"){

        document.getElementsByClassName("cont")[0].classList.add("small")

        setTimeout(function(){

            document.getElementsByClassName("cont")[0].classList.add("lside")

        },500)

        setTimeout(function(){

            document.getElementsByClassName("cont")[0].remove()

            new Calendar(date)

            document.getElementsByClassName("cont")[0].classList.add("small")

           document.getElementsByClassName("cont")[0].classList.add("rside") 

        },1000)

        setTimeout(function(){

            document.getElementsByClassName("cont")[0].classList.remove("rside")

        },1500)

        setTimeout(function(){

            document.getElementsByClassName("cont")[0].classList.remove("small")

        },2000)

        }

        else{

            swal({

                icon:"error",

                text:"Date is invalid"

            })

        }

    })

    swal({

        icon:"info",

        text:"This is the first code I made in 2021 !!! 🎉🎊... Hope you like it!"

    })

}

