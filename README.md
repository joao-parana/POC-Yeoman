### YEOMAN 
>[http://yeoman.io](http://yeoman.io)
> Our workflow is comprised of three tools for improving your productivity and satisfaction when building a web app: yo (the scaffolding tool), grunt (the build tool) and bower (for package management).

##### Instalando e Configurando

    sudo npm install -g yo 
    sudo npm install -g generator-webapp 
    sudo npm install -g generator-angular 
    
###### File Locations

>set USER = joao_parana
>Windows XP - C:\Documents and Settings\%USER%\Dados de aplicativos\npm    


>export USER = joao_parana
>MAC OS X - ??? 

##### Gerando a App

    mkdir POC-YO
    cd POC-YO/
    yo angular 
    
##### Fazendo o Build
    
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

###### Pré-requisitos - executar uma vez apenas

    npm install -g grunt-cli
    npm install grunt --save-dev
    npm install 
    bower install
    npm install karma-jasmine --save-dev
    npm install karma-safari-launcher --save-dev 
    npm install karma-firefox-launcher --save-dev
    npm install karma-chrome-launcher --save-dev
    npm install karma-ie-launcher --save-dev
    npm install -g karma@canary phantomjs karma-phantomjs-launcher
    

    
###### Teste propriamente dito
    
    grunt test
    # Alterando o Browser para Safari. Podemos adicionar vários Browsers
    # Exemplo: browsers: ['Safari', 'Firefox', 'Chrome', 'ChromeCanary']
    vi karma-e2e.conf.js 
    vi karma.conf.js
    grunt test
    # Pode ocorrer o erro abaixo. Altere o Environment e recarrege a Shell
    # INFO [launcher]: Starting browser Chrome 
    #   ERROR [launcher]: No binary for Chrome browser on your platform.
    #   Please, set "CHROME_BIN" env variable.
    cat package.json

