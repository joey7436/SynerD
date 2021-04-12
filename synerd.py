import mysql.connector

db = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='root',
    database='synerd'
    )

cursor = db.cursor()

cursor.execute("""
    CREATE TABLE UserInfo (
        username VARCHAR(50) PRIMARY KEY AUTO_INCREMENT,
        firstname VARCHAR(100),
        middlename VARCHAR(100),
        lastname VARCHAR(100),
        email VARCHAR(100),
        address1 VARCHAR(100),
        address2 VARCHAR(100),
        city VARCHAR(100),
        state VARCHAR(2),
        zipcode int UNSIGNED,
        employername VARCHAR(100)
    );
    """)

cursor.execute("""
    CREATE TABLE SubscriptionType(
        subscriptiontypecode int PRIMARY KEY AUTO_INCREMENT,
        subscriptiontypename VARCHAR(50)  
    );
    """)

cursor.execute("""
    CREATE TABLE Service(
      servicecode int PRIMARY KEY AUTO_INCREMENT,
      servicename VARCHAR(50),
      description VARCHAR(1000),
      premium VARCHAR(3),
      allocation VARCHAR(50)  
    );
    """)

cursor.execute("""
    CREATE TABLE Office(
        officecode int PRIMARY KEY,
        officename VARCHAR(100),
        attribution VARCHAR(100)
    );
    """)

cursor.execute("""
    CREATE TABLE Organization(
        organizationcode int PRIMARY KEY AUTO_INCREMENT,
        organizationname VARCHAR(100),
        description VARCHAR(1000),
        datejoined DATE,
        address1 VARCHAR(100),
        address2 VARCHAR(100),
        city VARCHAR(100),
        state VARCHAR(2),
        zipcode int,
        phonenumber int
    );
    """)

cursor.execute("""
    CREATE TABLE Subscriber (
        subscriberID int PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(25),
        FOREIGN KEY (username) REFERENCES UserInfo(username),
        subscriptiontypecode int
        FOREIGN KEY (subscriptiontypecode) REFERENCES SubscriptionType(subscriptiontypecode),
        servicecode int,
        FOREIGN KEY (servicecode) REFERENCES Service(servicecode),
        requestdate DATE,
        startdate DATE,
        enddate DATE,
        motifofcancellation VARCHAR(100),
        beneficiaryID int
    );
    """)

cursor.execute("""
    CREATE TABLE Officer(
        officecode int,
        FOREIGN KEY (officecode) REFERENCES Office(officecode),
        subscriberID int,
        FOREIGN KEY (subscriberID) REFERENCES Subscriber(subscriberID),
        startdate DATE,
        enddate DATE
    );
    """)

cursor.execute("""
    CREATE TABLE OrganizationMember(
        organizationcode int,
        FOREIGN KEY (organizationcode) REFERENCES Organization(organizationcode),
        subscriberID int,
        FOREIGN KEY (subscriberID) REFERENCES Subscriber(subscriberID),
        startdate DATE,
        enddate DATE,
        nativecountry VARCHAR(100),
        citizenship VARCHAR(50),
        isdelegate VARCHAR(3)
    );
    """)

cursor.execute("""
    CREATE TABLE TransferredSubscription(
        transferID int PRIMARY KEY AUTO_INCREMENT,
        transferfrom VARCHAR(100),
        transferto VARCHAR(100),
        requestdate DATE,
        transferdate DATE,
        subscriberID int,
        FOREIGN KEY (subscriberID) REFERENCES Subscriber(subscriberID)
    );
    """)