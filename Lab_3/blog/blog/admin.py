from django.contrib import admin
from articles.models import Article


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'get_excerpt', 'create_date')


admin.site.register(Article, ArticleAdmin)