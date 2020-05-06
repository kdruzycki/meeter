

# Meeter from here

*Nie commitujemy na master. Tworzymy własnego brancha i otwieramy merge requesty z tego brancha na master.*  
**Jeśli jest coś, czego inni nie wiedzą, a powinni, piszcie w tym pliku (sic!)**
Można do tego użyć wygodnego edytora Markdown, np. na stronie https://stackedit.io

## Quickstart

1. Instalujemy XAMPP.

2. Żeby sklonować repo musimy pod Windowsem pobrać Git Bash. Wpisujemy
		  
	   $ git config --global user.name "Imię i Nazwisko"
	   $ git config --global user.email "nasz email TAKI SAM jak na gitlabie"

	Jeśli nie mamy klucza SSH (jeśli nie wiemy, czy mamy, to znaczy, że nie mamy):

	   $ ssh-keygen -t rsa
	Zapyta nas, gdzie zapisać, proponuję zatwierdzić propozycję w nawiasie (Enter).  
Następnie zapyta o passphrase, można nacisnąć Enter i zostawić puste. I znów Enter.  
Teraz wchodzimy w plik z kluczem publicznym - bash nam wypisze, gdzie on jest, np.
		
	   Your public key has been saved in /c/Users/Lenovo/.ssh/id_rsa.pub
	Otwieramy podany plik w notatniku, zaznaczamy _całą_ zawartość i kopiujemy.  
Następnie wchodzimy na gitlab w _Settings_->_SSH keys_, wklejamy schowek i klikamy _Add key_.

	Teraz wchodzimy z powrotem w git bash

	   cd /c/xampp/htdocs
	   $ git clone git@gitlab.com:kdruzycki/meeter-from-here.git

3. Nasz serwer backendowy działa pod adresem  
http://localhost/meeter-from-here/

## Sprawdzanie, czy działa event
http://localhost/meeter-from-here/tester.php  
Najpierw trzeba się zalogować, czyli wykonać event UserLoggedIn i skopiować sobie sessionID otrzymane w odpowiedzi. Będzie potrzebne do praktycznie każdego eventu.

## Sprawdzanie, czy działa w bazie
**Edit** Niestety tymczasowo phpMyAdmin się zepsuł przez nazwę.pl, więc możemy tymczasowo korzystać z pliku _runsql.php_.

Żeby sprawdzić, czy działa nasz skrypt i tworzy/usuwa/zmienia rekordy w bazie, tak jak chcemy, warto skorzystać z phpMyAdmin pod adresem  
[https://mysql.nazwa.pl/index.php](https://mysql.nazwa.pl/index.php)  
Login: _scena22_meeter_  
Hasło: _3qu!NEYF#KaeJDH_  