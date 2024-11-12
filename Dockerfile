FROM nginx:alpine
COPY dist/flipbook/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]