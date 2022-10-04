
from http.client import HTTPResponse
from urllib import response
from django.shortcuts import render
from.models import Profile
from django.http import HttpResponse
from django.template import loader
import pdfkit
import io



# Create your views here.
def accept(request):
   
    if request.method == "POST":
        name=request.POST.get("name","")
        phone=request.POST.get("phone","")
        email=request.POST.get("email","")
        degree=request.POST.get("degree","")
        school=request.POST.get("school","")
        university=request.POST.get("university","")
        college_cgpa=request.POST.get("college_cgpa","")
        skill=request.POST.get("skill","")
        about_you=request.POST.get("about_you","")
        hobbies=request.POST.get("hobbies","")
        previous_work=request.POST.get("previous_work","")
        achievements=request.POST.get("achievements","")
        
        profile=Profile(name=name,phone=phone,email=email,degree=degree,school=school,university=university,college_cgpa=college_cgpa,skill=skill,about_you=about_you,hobbies=hobbies,previous_work=previous_work,achievements=achievements)
        profile.save()
        
    return render(request,"accept.html")

def resume(request,id):
    user_profile=Profile.objects.get(pk=id)
    template =loader.get_template("resume.html")
    html = template.render({'user_profile':user_profile})

    option={
        'page-size':'Letter',
        'encoding': 'UTF-8'
    }
    pdf = pdfkit.from_string(html,False,option)
    response = HttpResponse(pdf,content_type='application/pdf')
    response['Content-Disposition']='attachment' 
    return response
    
def list(request):
    profile=Profile.objects.all()
    return render(request,"list.html",{'profile':profile})

   