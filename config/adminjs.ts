import { AdminJSProviderConfig, LucidResource } from '@adminjs/adonis'

import { componentLoader, Components } from '../app/admin/component_loader.js'
import authProvider from '../app/admin/auth.js'
import Guest from '#models/guest'
import Event from '#models/event'
import { HrefContext } from 'adminjs'
import dbConfig from './database.js'

const adminjsConfig: AdminJSProviderConfig = {
  adapter: {
    enabled: true,
  },
  adminjs: {
    rootPath: '/admin',
    loginPath: '/admin/login',
    logoutPath: '/admin/logout',
    componentLoader,
    resources: [
      {
        resource: new LucidResource(Guest, dbConfig.connection),
        options: {
          navigation: null,
          listProperties: [
            'id',
            'email',
            'fullName',
            'isComing',
            'isAccompagnated',
            'allergies',
            'createdAt',
            'updatedAt',
          ],
          showProperties: [
            'email',
            'fullName',
            'isComing',
            'isAccompagnated',
            'allergies',
            'createdAt',
            'updatedAt',
          ],
          editProperties: ['email', 'fullName', 'isComing', 'isAccompagnated', 'allergies'],
          actions: {
            email: {
              showResourceActions: false,
              actionType: 'bulk',
              component: Components.SendEmailButton,
              handler: (request: any, response: any, context: any) => context,
            },
          },
        },
      },
      {
        resource: new LucidResource(Event, dbConfig.connection),
        options: {
          href: (context: HrefContext) => context.h.showUrl('events', '1'),
          listProperties: [
            'text',
            'location' /*,  'startTime' */ /*,  'endTime' */,
            'createdAt',
            'updatedAt',
          ],
          showProperties: [
            'text',
            'location' /*,  'startTime' */ /*,  'endTime' */,
            'createdAt',
            'updatedAt',
          ],
          editProperties: ['text', 'location' /*,  'startTime' */ /*,  'endTime' */],
          navigation: null,
          properties: {
            text: {
              type: 'richtext',
            },
          },
          actions: {
            list: {
              isAccessible: true,
              isVisible: true,
              showFilter: false,
            },
            search: {
              isAccessible: false,
              isVisible: false,
            },
            filter: {
              isAccessible: false,
              isVisible: false,
            },
            new: {
              isAccessible: false,
              isVisible: false,
            },
            bulkDelete: {
              isAccessible: false,
              isVisible: false,
            },
            delete: {
              isAccessible: false,
              isVisible: false,
            },
          },
        },
      },
    ],
    locale: {
      availableLanguages: ['fr'],
      language: 'fr',
      translations: {
        fr: {
          actions: {
            new: 'Créer',
            edit: 'Modifier',
            show: 'Voir',
            delete: 'Supprimer',
            bulkDelete: 'Tout supprimer',
            list: 'Liste',
            email: 'Envoyer un email',
          },
          buttons: {
            save: 'Sauvegarder',
            addNewItem: 'Ajouter un élément',
            filter: 'Filtrer',
            filterActive: 'Filtres actifs ({{count}})',
            applyChanges: 'Appliquer les changements',
            resetFilter: 'Réinitialiser',
            confirmRemovalMany: 'Confirmer la suppression de {{count}} élément',
            confirmRemovalMany_plural: 'Confirmer la suppression de {{count}} éléments',
            logout: 'Se déconnecter',
            login: 'Se connecter',
            seeTheDocumentation: 'Voir: <1>la documentation</1>',
            createFirstRecord: 'Créer le premier élément',
            cancel: 'Annuler',
            confirm: 'Confirmer',
            contactUs: 'Nous contacter',
          },
          components: {
            DropZone: {
              placeholder: 'Déplacez vos fichier ici',
              acceptedSize: 'taille max: {{maxSize}}',
              acceptedType: 'Formats acceptés: {{mimeTypes}}',
              unsupportedSize: 'Le fichier {{fileName}} est trop gros',
              unsupportedType: "Le fichier {{fileName}} n'a pas le bon format: {{fileType}}",
            },
            LanguageSelector: {
              availableLanguages: {
                'de': 'German',
                'en': 'English',
                'es': 'Spanish',
                'it': 'Italian',
                'ja': 'Japanese',
                'pl': 'Polish',
                'pt-BR': 'Portuguese (Brazil)',
                'ua': 'Ukrainian',
                'zh-CN': 'Chinese',
              },
            },
            Login: {
              welcomeHeader: 'Bienvenue',
              welcomeMessage: 'dans votre admin',
              properties: {
                email: 'Email',
                password: 'Mot de passe',
              },
              loginButton: 'Se connecter',
            },
          },
          labels: {
            'events': 'Evenements',
            'navigation': 'Navigation',
            'pages': 'Pages',
            'selectedRecords': 'Selection ({{selected}})',
            'filters': 'Filtres',
            'adminVersion': 'Admin: {{version}}',
            'appVersion': 'App: {{version}}',
            'dashboard': 'Dashboard',
            'guests': 'Invités',
            'isComing.true': 'OUI',
            'isComing.false': 'NON',
            'isAccompagnated.true': 'OUI',
            'isAccompagnated.false': 'NON',
          },
          properties: {
            length: 'Longueur',
            from: 'De',
            to: 'A',
            id: 'id',
            email: 'email',
            fullName: 'nom',
            isComing: 'vient',
            isAccompagnated: 'est accompagné',
            allergies: 'allergies',
            createdAt: 'inscrit le',
            updatedAt: 'modifié le',
          },
          messages: {
            successfullyBulkDeleted: 'Successfully removed {{count}} record',
            successfullyBulkDeleted_plural: 'Successfully removed {{count}} records',
            successfullyDeleted: 'Successfully deleted given record',
            successfullyUpdated: 'Successfully updated given record',
            thereWereValidationErrors: 'There are validation errors - check them out below',
            forbiddenError: 'You cannot perform action {{actionName}} on {{resourceId}}',
            anyForbiddenError: 'You cannot perform given action',
            successfullyCreated: 'Successfully created a new record',
            bulkDeleteError:
              'There was an error deleting records. Check out console to see more information',
            errorFetchingRecords:
              'There was an error fetching records. Check out console to see more information',
            errorFetchingRecord:
              'There was an error fetching record. Check out console to see more information',
            noRecordsSelected: 'You have not selected any records',
            theseRecordsWillBeRemoved: 'Following record will be removed',
            theseRecordsWillBeRemoved_plural: 'Following records will be removed',
            pickSomeFirstToRemove: 'In order to remove records, you have to pick them first',
            error404Resource: 'Resource of given id: {{resourceId}} cannot be found',
            error404Action:
              'Resource of given id: {{resourceId}} does not have an action with name: {{actionName}} or you are not authorized to use it!',
            error404Record:
              'Resource of given id: {{resourceId}} does not have a record with id: {{recordId}} or you are not authorized to use it!',
            seeConsoleForMore: 'See development console for more details...',
            noActionComponent: 'You have to implement action component for your Action',

            noRecordsInResource: 'There are no records in this resource',
            noRecords: 'No records',
            confirmDelete: 'Do you really want to remove this item?',
            welcomeOnBoard_title: 'Welcome on Board!',
            welcomeOnBoard_subtitle:
              'Now you are one of us! We prepared a few tips for you to start:',
            addingResources_title: 'Adding Resources',
            addingResources_subtitle: 'Learn how to add new resources to the sidebar',
            customizeResources_title: 'Customize Resources',
            customizeResources_subtitle: 'Define behavior, properties and more...',
            customizeActions_title: 'Customize Actions',
            customizeActions_subtitle: 'Modify existing actions or add custom ones',
            writeOwnComponents_title: 'Write Components',
            writeOwnComponents_subtitle: 'How to modify the Look & Feel of AdminJS',
            customDashboard_title: 'Custom Dashboard',
            customDashboard_subtitle: 'Learn how to customize the home screen of AdminJS',
            roleBasedAccess_title: 'Role-Based Access Control',
            roleBasedAccess_subtitle: 'Define access permissions for your AdminJS users',
            community_title: 'Join the Discord community',
            community_subtitle: 'Talk with the creators of AdminJS and other AdminJS users',
            foundBug_title: 'Found a Bug? need improvement?',
            foundBug_subtitle: 'Raise an issue on our GitHub repo',
            needMoreSolutions_title: 'Need more advanced solutions?',
            needMoreSolutions_subtitle:
              'We are here to provide you a beautiful UX/UI design and tailor made software based (not only) on AdminJS',
            invalidCredentials: 'Wrong email and/or password',
            keyPlaceholder: 'KEY',
            valuePlaceholder: 'VALUE',
            initialKey: 'Key-{{number}}',
            keyInUse: 'Object keys must be unique',
            keyValuePropertyDefaultDescription:
              'All values are stored as text. Keys must be unique, duplicate keys will not be saved.',
            pageNotFound_title: 'Page not found',
            pageNotFound_subtitle: 'Page <strong>"{{pageName}}"</strong> does not exist',
            componentNotFound_title: 'No component specified',
            componentNotFound_subtitle:
              'You have to specify component which will render this element',
          },
        },
      },
    },
    branding: {
      companyName: 'Thèse de Laetitia',
      theme: {},
    },
    settings: {
      defaultPerPage: 10,
    },
  },
  auth: {
    enabled: true,
    provider: authProvider,
    middlewares: [],
  },
  middlewares: [],
}

export default adminjsConfig
