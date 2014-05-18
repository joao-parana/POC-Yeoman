### YEOMAN 
>[http://yeoman.io](http://yeoman.io)
> Our workflow is comprised of three tools for improving your productivity and satisfaction when building a web app: yo (the scaffolding tool), grunt (the build tool) and bower (for package management).

##### Instalando e Configurando

    sudo npm install -g yo 
    sudo npm install -g generator-webapp 
    sudo npm install -g generator-angular 

##### Gerando a App

    mkdir POC-YO
    cd POC-YO/
    yo angular 
    bower install angular-ui 
    # Listando mensagem de Help
    bower
    # retirando a dependência Deafult do JQuery 
    # Elimino a linha "jquery": "~1.11.0",
    # Já que : Native AngularJS (Angular) directives for Twitter's Bootstrap. 
    # Small footprint (5kB gzipped!), no 3rd party JS dependencies 
    # (jQuery, bootstrap JS) required! 
    # See: http://angular-ui.github.io/bootstrap
    # Além disso Angular JS tem sua propria implementação do JQuery :
    # Veja:  https://docs.angularjs.org/api/ng/function/angular.element
    vi bower.json
  
##### Testando a App

    grunt --force  test
    npm install karma-jasmine --save-dev
    npm install karma-safari-launcher --save-dev 
    grunt test
    # Alterando o Browser para Safari. Podemos adicionar vários Browsers
    # Exemplo: browsers: ['Safari', 'Firefox', 'Chrome', 'ChromeCanary']
    vi karma-e2e.conf.js 
    vi karma.conf.js
    grunt test
    cat package.json

