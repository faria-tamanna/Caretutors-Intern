from django.shortcuts import render, redirect
import requests
import json


def dashboard(request):
    context = {
        'dashboard':True,
    }
    return render(request, 'gorest/dashboard.html', context)


def get_data(apiurl):
    hdr = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'}
    res = requests.get(apiurl, headers=hdr)
    return res.json()['data']

def users(request):
    users = get_data("https://gorest.co.in/public/v1/users")
    context = {
        'users':users,
    }
    return render(request, 'gorest/users.html', context)


