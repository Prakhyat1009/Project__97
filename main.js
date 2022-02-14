function showquestion1 ()
{
 var question1="<h3>Q1-What time does Heather's brother arrive in town?</h3>";
 var question2="<h3>Q2-Where is he flying from?</h3>";
 var question3="<h3>Q3-What are they going to do on Thursday evening?</h3>";
 var question4="<h3>Q4-How long is Terry going to stay with her?</h3>";
 var question5="<h3>Q5-What are the plans for Friday afternoon?</h3>";
 var question6="<h3>Q6-Where is the Mexican restaurant?</h3>";
 var question7="<h3>Q7-Where are they going to have lunch on Saturday?</h3>";
 var question8="<h3>Q8-What surprise does Heather have for her brother?</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output1").innerHTML= row;
}

function hidequestion1()
{
document.getElementById("output1").innerHTML="";
}

function showanswer1 ()
{
 var question1="<h3>Ans1-8pm Thursday</h3>";
 var question2="<h3>Ans2-Melbourne</h3>";
 var question3="<h3>Ans3-Stay at home</h3>";
 var question4="<h3>Ans4-Until Monday</h3>";
 var question5="<h3>Ans5-Picnic at beach</h3>";
 var question6="<h3>Ans6-7th Avenue</h3>";
 var question7="<h3>Ans7-In Central Park</h3>";
 var question8="<h3>Ans8-A basketball match</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output1ans").innerHTML= row;
}

function hideanswer1()
{
document.getElementById("output1ans").innerHTML="";
}



function showquestion2 ()
{
    var heading="<h2>State true or false</h2>"
 var question1="<h3>Q1-Mike wants to go and see the Tower of London.</h3>";
 var question2="<h3>Q2-It never rains in London in August.</h3>";
 var question3="<h3>Q3-Jen doesn't remember the correct gate number.</h3>";
 var question4="<h3>Q4-Mike has terrible memories about his trip to Germany.</h3>";
 var question5="<h3>Q5-There are three flights leaving at ten o'clock.</h3>";
 var question6="<h3>Q6-Mike knows which airline they are flying with.</h3>";
 var question7="<h3>Q7-There's a problem with the British Airways flight.</h3>";
 var question8="<h3>Q8-They are going to walk to the gate.</h3>";
 
 var row=heading+question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output2").innerHTML= row;
}

function hidequestion2()
{
document.getElementById("output2").innerHTML="";
}

function showanswer2 ()
{
 var question1="<h3>Ans1-True</h3>";
 var question2="<h3>Ans2-False</h3>";
 var question3="<h3>Ans3-True</h3>";
 var question4="<h3>Ans4-True</h3>";
 var question5="<h3>Ans5-False</h3>";
 var question6="<h3>Ans6-True</h3>";
 var question7="<h3>Ans7-False</h3>";
 var question8="<h3>Ans8-False</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output2ans").innerHTML= row;
}

function hideanswer2()
{
document.getElementById("output2ans").innerHTML="";
}



function showquestion3 ()
{
 
 var question1="<h3>Q1-Did she go to the stable?</h3>";
 var question2="<h3>Q2-Did she put a blanket on Star?</h3>";
 var question3="<h3>Q3-Was Star seven years old?</h3>";
 var question4="<h3>Q4-Did Laura's brother come out to the stable?</h3>";
 var question5="<h3>Q5-Were Laura and her sister going to exercise the horses?</h3>";
 var question6="<h3>Q6-Was it a cloudy day?</h3>";
 var question7="<h3>Q7-Did Janice saddle up Moonbeam?</h3>";
 var question8="<h3>Q8-Did they get on the horses?</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output3").innerHTML= row;
}

function hidequestion3()
{
document.getElementById("output3").innerHTML="";
}

function showanswer3 ()
{
 var question1="<h3>Ans1-Yes</h3>";
 var question2="<h3>Ans2-No</h3>";
 var question3="<h3>Ans3-Yes</h3>";
 var question4="<h3>Ans4-No</h3>";
 var question5="<h3>Ans5-Yes</h3>";
 var question6="<h3>Ans6-No</h3>";
 var question7="<h3>Ans7-Yes</h3>";
 var question8="<h3>Ans8-Yes</h3>";
 
 var row=question1+question2+question3+question4+question5+question6+question7+question8;
 document.getElementById("output3ans").innerHTML= row;
}

function hideanswer3()
{
document.getElementById("output3ans").innerHTML="";
}

function back1(){
window.location="index.html";
}