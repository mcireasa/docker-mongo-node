#FROM -  defines the parent docker image which will serve as a starting point

FROM node:11

#WORKDIR - goes to a path inside the container

WORKDIR /usr/src/app

#Copiem in container package si package-lock (folosim * - wildcard - pt a adauga si -lock )

COPY package*.json ./

#RUN - specifiam ca trebuie instalate dependencie-urile utilizand npm install

RUN npm install 

#copiem toate fisierele in container

COPY . .

#specificam portul pe care trebuie rulata aplicatia; este acelasi cu cel pe care ruleaza server-ul

EXPOSE 3000

#CMD - executa npm start pentru a porni server-ul

CMD [ "npm", "start"]


