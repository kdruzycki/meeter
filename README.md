
# Meeter from here

*Nie commitujemy na master. Tworzymy własnego brancha i otwieramy merge requesty z tego brancha na master.*

## Quickstart

1. Instalujemy XAMPP.

2. Żeby sklonować repo musimy pod Windowsem pobrać Git Bash. Wpisujemy
		  
	   $ git config --global user.name "Imię i Nazwisko"
	   $ git config --global user.email "nasz email TAKI SAM jak na gitlabie"

	Jeśli nie mamy klucza SSH (jeśli nie wiemy, czy mamy, to znaczy, że nie mamy)

	   $ ssh-keygen -t rsa
	Zapyta nas, gdzie zapisać, proponuję zatwierdzić propozycję w nawiasie (Enter).
Następnie zapyta o passphrase, można nacisnąć Enter i zostawić puste. I znów Enter.
Teraz wchodzimy w plik z kluczem publicznym - bash nam wypisze, gdzie on jest, np.
		
	   Your public key has been saved in /c/Users/Lenovo/.ssh/id_rsa.pub
	Zaznaczamy _całą_ zawartość pliku i kopiujemy
Następnie wchodzimy na gitlab w _Settings_->_SSH keys_, wklejamy schowek i klikamy _Add key_.

	Teraz wchodzimy z powrotem w git bash

	   cd /c/xampp/htdocs
	   $ git clone git@gitlab.com:kdruzycki/meeter-from-here.git


