DELETE FROM
    Users;

DELETE FROM
    Events;

DELETE FROM
    Admin;

INSERT INTO
    Users (
        user_id,
        authorized,
        name,
        idea_name,
        email,
        password
    )
VALUES
    (
        1,
        true,
        'Admin',
        'Admin Idea',
        'admin@admin.com',
        '$2a$10$y4ePXiVkKvX3LrnO84F.7ek.Xyz0gWhJXDpLk6SYg0n84EaO.2CdW'
    );

INSERT INTO
    Users (
        user_id,
        authorized,
        name,
        idea_name,
        email,
        password,
        completed_challenges,
        completed_steps,
        completed_phases,
        completed_achievements
    )
VALUES
    (
        2,
        false,
        'Elon Musk',
        'Name of Idea',
        'elon@musk.com',
        '$2a$10$GC.ykfsGtde3v.nPeSF/UesB8APFyuMzujCukxlE3PhfU0DURM4Ju',
        0,
        0,
        0,
        0
    );

SELECT
    setval(
        pg_get_serial_sequence('Users', 'user_id'),
        (
            SELECT
                max(user_id)
            FROM
                Users
        )
    );

INSERT INTO
    Admin (user_id)
VALUES
    (1);

INSERT INTO
    Events (
        email,
        title,
        description,
        start_date,
        end_date,
        type
    )
VALUES
    (
        'elon@musk.com',
        'Formação em Excel',
        'Será realizada uma formação básica em Excel, abordando funções e fórmulas essenciais.',
        '2023-10-15 09:00:00',
        '2023-10-15 17:00:00',
        'Appointments'
    ),
    (
        'elon@musk.com',
        'Seminário de Marketing Digital',
        'Participe do seminário sobre estratégias avançadas de marketing digital.',
        '2023-11-02 10:30:00',
        '2023-11-02 16:30:00',
        'Potential Customers'
    ),
    (
        'elon@musk.com',
        'Oficina de Fotografia',
        'Aprenda técnicas de fotografia e edição de imagens com profissionais experientes.',
        '2023-11-20 13:00:00',
        '2023-11-20 18:00:00',
        'Key Journey Milestones'
    ),
    (
        'elon@musk.com',
        'Conferência de Saúde Mental',
        'Participe da conferência para discutir a importância da saúde mental no ambiente de trabalho.',
        '2023-12-05 09:30:00',
        '2023-12-05 16:30:00',
        'Appointments'
    ),
    (
        'elon@musk.com',
        'Treinamento em Gestão de Projetos',
        'Aprenda as melhores práticas em gestão de projetos e aumente sua eficiência.',
        '2023-12-18 10:00:00',
        '2023-12-18 17:00:00',
        'Customers'
    ),
    (
        'elon@musk.com',
        'Palestra sobre Inovação',
        'Saiba como promover a inovação em sua empresa com exemplos práticos.',
        '2023-10-25 14:00:00',
        '2023-10-25 16:00:00',
        'Potential Customers'
    ),
    (
        'elon@musk.com',
        'Workshop de Desenvolvimento Web',
        'Participe deste workshop para aprender a criar sites modernos e responsivos.',
        '2023-11-10 09:30:00',
        '2023-11-10 17:30:00',
        'Appointments'
    ),
    (
        'elon@musk.com',
        'Workshop de Desenvolvimento Web',
        'Participe deste workshop para aprender a criar sites modernos e responsivos.',
        '2023-11-10 09:30:00',
        '2023-11-10 17:30:00',
        'Potential Customers'
    ),
    (
        'elon@musk.com',
        'Conferência de Ciência de Dados',
        'Explore as últimas tendências em ciência de dados e análise de dados.',
        '2023-09-30 09:00:00',
        '2023-09-30 17:00:00',
        'Customers'
    ),
    (
        'elon@musk.com',
        'Seminário de Sustentabilidade',
        'Discuta práticas sustentáveis e seu impacto no meio ambiente.',
        '2023-11-15 10:30:00',
        '2023-11-15 16:30:00',
        'Potential Customers'
    ),
    (
        'elon@musk.com',
        'Oficina de Programação Python',
        'Aprenda a programar em Python e desenvolver aplicativos simples.',
        '2023-10-08 13:00:00',
        '2023-10-08 18:00:00',
        'Key Journey Milestones'
    ),
    (
        'elon@musk.com',
        'Conferência de Design de Interiores',
        'Explore as últimas tendências em design de interiores e decoração.',
        '2023-12-20 09:00:00',
        '2023-12-20 17:00:00',
        'Appointments'
    ),
    (
        'elon@musk.com',
        'Palestra sobre Gestão Financeira',
        'Aprenda a gerenciar suas finanças pessoais com eficiência.',
        '2023-10-12 14:00:00',
        '2023-10-12 16:00:00',
        'Customers'
    ),
    (
        'elon@musk.com',
        'Formação em Design e Decoração',
        'Explore as últimas tendências em design de interiores e decoração.',
        '2023-10-12 12:00:00',
        '2023-10-12 14:00:00',
        'Customers'
    ),
    (
        'elon@musk.com',
        'Formação em Python',
        'Aprenda a programar em Python e desenvolver aplicativos simples.',
        '2023-10-12 14:00:00',
        '2023-10-12 16:00:00',
        'Customers'
    );

INSERT INTO
    Events (
        email,
        title,
        description,
        start_date,
        end_date,
        type
    )
VALUES
    (
        'mark@gmail.com',
        'How to fight Elon Musk',
        'Today we are going to learn how to fight Teslas onwner.',
        '2023-10-15 09:00:00',
        '2023-10-18 17:00:00',
        'Appointments'
    );