from django.shortcuts import render

def base(request):
    return render(request, 'hupajlokancelaria/base.html', {'base': base})
