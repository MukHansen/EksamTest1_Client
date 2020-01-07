# Course-Assignment-3_Client
 
This is a client for login in or out of REST endpoint and for fetching data when logged in.  
Set REST endpoint URL in file **src/settings.js**  
 
## Deployment instructions
First clone project.  
In cloned folder using a terminal enter:  
#### `npm install`  
and
#### `npm install react-router-dom`  
to install prerequisites
 
When all is ready to deploy:
 
#### `npm run build`
 
 
## Deploy via Surge
 
1)
I et f�rdigt react projekt kan man v�lge at deploye via surge. Det foreg�r alt sammen via terminalen(git bash). For at komme i gang, skal man navigere til roden af selve ens projekt. H�jre klik i din projektfolder og find "git bash here". I terminalen skal du skrive "npm run build" (uden citationstegn), hvilket opretter en build mappe, lidt ligesom n�r man i Java f�r en target folder, efter man har builded.
 
2)
Hvis man ikke tidligere har benyttet sig af surge, s� skal man igen i en terminal (git bash) skrive �npm install -g surge� (uden citationstegn). Det installerer interfacet man skal bruge for at hoste via surge.
Dern�st skal man skrive  
#### `surge --project ./build --domain DITDOM�NENAVN.surge.sh`  
Man skal IKKE skrive hverken .dk eller .com, da .surge.sh er et topdom�ne. DITDOM�NENAVN skal erstattes af hvad du gerne vil have som navn p� dit projekt.
Hvis du ikke har benyttet dig af Surge f�r, vil du blive promptet til at indtaste f�rst en email og dern�st et password. I nogle terminaler er der IKKE noget grafisk der fort�ller dig at det er det du skal.
 
S�dan her ser det f.eks. ud i git bash.
 
![text](https://cdn.discordapp.com/attachments/613362468172988418/640557212183429141/unknown.png)
 
Her skal man bare indtaste email f�rst og s� trykke enter. Dern�st er det tid til et password og s� enter.
Det vil se s�dan her ud hvis det er lykkedes
 
 
![text](https://cdn.discordapp.com/attachments/613362468172988418/640557766884327424/unknown.png)
 
Du kan herefter tilg� dit react projekt via DITDOM�NENAVN.surge.sh

