export const ENDPOINTS = {
  "GET /": {
    name: "GitHub API Root",
    documentationUrl:
      "https://docs.github.com/rest/overview/resources-in-the-rest-api#root-endpoint",
  },
  "GET /app": {
    name: "Get the authenticated app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#get-the-authenticated-app",
  },
  "POST /app-manifests/{code}/conversions": {
    name: "Create a GitHub App from a manifest",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#create-a-github-app-from-a-manifest",
  },
  "GET /app/hook/config": {
    name: "Get a webhook configuration for an app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#get-a-webhook-configuration-for-an-app",
  },
  "PATCH /app/hook/config": {
    name: "Update a webhook configuration for an app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#update-a-webhook-configuration-for-an-app",
  },
  "GET /app/hook/deliveries": {
    name: "List deliveries for an app webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-deliveries-for-an-app-webhook",
  },
  "GET /app/hook/deliveries/{delivery_id}": {
    name: "Get a delivery for an app webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#get-a-delivery-for-an-app-webhook",
  },
  "POST /app/hook/deliveries/{delivery_id}/attempts": {
    name: "Redeliver a delivery for an app webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#redeliver-a-delivery-for-an-app-webhook",
  },
  "GET /app/installations": {
    name: "List installations for the authenticated app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app",
  },
  "GET /app/installations/{installation_id}": {
    name: "Get an installation for the authenticated app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#get-an-installation-for-the-authenticated-app",
  },
  "DELETE /app/installations/{installation_id}": {
    name: "Delete an installation for the authenticated app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#delete-an-installation-for-the-authenticated-app",
  },
  "POST /app/installations/{installation_id}/access_tokens": {
    name: "Create an installation access token for an app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps/#create-an-installation-access-token-for-an-app",
  },
  "PUT /app/installations/{installation_id}/suspended": {
    name: "Suspend an app installation",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#suspend-an-app-installation",
  },
  "DELETE /app/installations/{installation_id}/suspended": {
    name: "Unsuspend an app installation",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#unsuspend-an-app-installation",
  },
  "GET /applications/grants": {
    name: "List your grants",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#list-your-grants",
  },
  "GET /applications/grants/{grant_id}": {
    name: "Get a single grant",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#get-a-single-grant",
  },
  "DELETE /applications/grants/{grant_id}": {
    name: "Delete a grant",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#delete-a-grant",
  },
  "DELETE /applications/{client_id}/grant": {
    name: "Delete an app authorization",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#delete-an-app-authorization",
  },
  "DELETE /applications/{client_id}/grants/{access_token}": {
    name: "Revoke a grant for an application",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#revoke-a-grant-for-an-application",
  },
  "POST /applications/{client_id}/token": {
    name: "Check a token",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#check-a-token",
  },
  "PATCH /applications/{client_id}/token": {
    name: "Reset a token",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#reset-a-token",
  },
  "DELETE /applications/{client_id}/token": {
    name: "Delete an app token",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#delete-an-app-token",
  },
  "POST /applications/{client_id}/token/scoped": {
    name: "Create a scoped access token",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#create-a-scoped-access-token",
  },
  "GET /applications/{client_id}/tokens/{access_token}": {
    name: "Check an authorization",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#check-an-authorization",
  },
  "POST /applications/{client_id}/tokens/{access_token}": {
    name: "Reset an authorization",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#reset-an-authorization",
  },
  "DELETE /applications/{client_id}/tokens/{access_token}": {
    name: "Revoke an authorization for an application",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#revoke-an-authorization-for-an-application",
  },
  "GET /apps/{app_slug}": {
    name: "Get an app",
    documentationUrl: "https://docs.github.com/rest/reference/apps/#get-an-app",
  },
  "GET /authorizations": {
    name: "List your authorizations",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#list-your-authorizations",
  },
  "POST /authorizations": {
    name: "Create a new authorization",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#create-a-new-authorization",
  },
  "PUT /authorizations/clients/{client_id}": {
    name: "Get-or-create an authorization for a specific app",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app",
  },
  "PUT /authorizations/clients/{client_id}/{fingerprint}": {
    name: "Get-or-create an authorization for a specific app and fingerprint",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint",
  },
  "GET /authorizations/{authorization_id}": {
    name: "Get a single authorization",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#get-a-single-authorization",
  },
  "PATCH /authorizations/{authorization_id}": {
    name: "Update an existing authorization",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#update-an-existing-authorization",
  },
  "DELETE /authorizations/{authorization_id}": {
    name: "Delete an authorization",
    documentationUrl:
      "https://docs.github.com/rest/reference/oauth-authorizations#delete-an-authorization",
  },
  "GET /codes_of_conduct": {
    name: "Get all codes of conduct",
    documentationUrl:
      "https://docs.github.com/rest/reference/codes-of-conduct#get-all-codes-of-conduct",
  },
  "GET /codes_of_conduct/{key}": {
    name: "Get a code of conduct",
    documentationUrl:
      "https://docs.github.com/rest/reference/codes-of-conduct#get-a-code-of-conduct",
  },
  "GET /emojis": {
    name: "Get emojis",
    documentationUrl:
      "https://docs.github.com/rest/reference/emojis#get-emojis",
  },
  "GET /enterprises/{enterprise}/actions/permissions": {
    name: "Get GitHub Actions permissions for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise",
  },
  "PUT /enterprises/{enterprise}/actions/permissions": {
    name: "Set GitHub Actions permissions for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise",
  },
  "GET /enterprises/{enterprise}/actions/permissions/organizations": {
    name:
      "List selected organizations enabled for GitHub Actions in an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise",
  },
  "PUT /enterprises/{enterprise}/actions/permissions/organizations": {
    name:
      "Set selected organizations enabled for GitHub Actions in an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise",
  },
  "PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}": {
    name: "Enable a selected organization for GitHub Actions in an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise",
  },
  "DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}": {
    name: "Disable a selected organization for GitHub Actions in an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise",
  },
  "GET /enterprises/{enterprise}/actions/permissions/selected-actions": {
    name: "Get allowed actions for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise",
  },
  "PUT /enterprises/{enterprise}/actions/permissions/selected-actions": {
    name: "Set allowed actions for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise",
  },
  "GET /enterprises/{enterprise}/actions/runner-groups": {
    name: "List self-hosted runner groups for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise",
  },
  "POST /enterprises/{enterprise}/actions/runner-groups": {
    name: "Create a self-hosted runner group for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise",
  },
  "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}": {
    name: "Get a self-hosted runner group for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise",
  },
  "PATCH /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}": {
    name: "Update a self-hosted runner group for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise",
  },
  "DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}": {
    name: "Delete a self-hosted runner group from an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise",
  },
  "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations": {
    name:
      "List organization access to a self-hosted runner group in an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise",
  },
  "PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations": {
    name:
      "Set organization access for a self-hosted runner group in an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise",
  },
  "PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}": {
    name:
      "Add organization access to a self-hosted runner group in an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise",
  },
  "DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}": {
    name:
      "Remove organization access to a self-hosted runner group in an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise",
  },
  "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners": {
    name: "List self-hosted runners in a group for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise",
  },
  "PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners": {
    name: "Set self-hosted runners in a group for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise",
  },
  "PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}": {
    name: "Add a self-hosted runner to a group for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise",
  },
  "DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}": {
    name: "Remove a self-hosted runner from a group for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise",
  },
  "GET /enterprises/{enterprise}/actions/runners": {
    name: "List self-hosted runners for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise",
  },
  "GET /enterprises/{enterprise}/actions/runners/downloads": {
    name: "List runner applications for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise",
  },
  "POST /enterprises/{enterprise}/actions/runners/registration-token": {
    name: "Create a registration token for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise",
  },
  "POST /enterprises/{enterprise}/actions/runners/remove-token": {
    name: "Create a remove token for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise",
  },
  "GET /enterprises/{enterprise}/actions/runners/{runner_id}": {
    name: "Get a self-hosted runner for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise",
  },
  "DELETE /enterprises/{enterprise}/actions/runners/{runner_id}": {
    name: "Delete a self-hosted runner from an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise",
  },
  "GET /enterprises/{enterprise}/audit-log": {
    name: "Get the audit log for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise",
  },
  "GET /enterprises/{enterprise}/settings/billing/actions": {
    name: "Get GitHub Actions billing for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-an-enterprise",
  },
  "GET /enterprises/{enterprise}/settings/billing/packages": {
    name: "Get GitHub Packages billing for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-an-enterprise",
  },
  "GET /enterprises/{enterprise}/settings/billing/shared-storage": {
    name: "Get shared storage billing for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-an-enterprise",
  },
  "GET /events": {
    name: "List public events",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-public-events",
  },
  "GET /feeds": {
    name: "Get feeds",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#get-feeds",
  },
  "GET /gists": {
    name: "List gists for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#list-gists-for-the-authenticated-user",
  },
  "POST /gists": {
    name: "Create a gist",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#create-a-gist",
  },
  "GET /gists/public": {
    name: "List public gists",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#list-public-gists",
  },
  "GET /gists/starred": {
    name: "List starred gists",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#list-starred-gists",
  },
  "GET /gists/{gist_id}": {
    name: "Get a gist",
    documentationUrl: "https://docs.github.com/rest/reference/gists#get-a-gist",
  },
  "PATCH /gists/{gist_id}": {
    name: "Update a gist",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists/#update-a-gist",
  },
  "DELETE /gists/{gist_id}": {
    name: "Delete a gist",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#delete-a-gist",
  },
  "GET /gists/{gist_id}/comments": {
    name: "List gist comments",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#list-gist-comments",
  },
  "POST /gists/{gist_id}/comments": {
    name: "Create a gist comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#create-a-gist-comment",
  },
  "GET /gists/{gist_id}/comments/{comment_id}": {
    name: "Get a gist comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#get-a-gist-comment",
  },
  "PATCH /gists/{gist_id}/comments/{comment_id}": {
    name: "Update a gist comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#update-a-gist-comment",
  },
  "DELETE /gists/{gist_id}/comments/{comment_id}": {
    name: "Delete a gist comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#delete-a-gist-comment",
  },
  "GET /gists/{gist_id}/commits": {
    name: "List gist commits",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#list-gist-commits",
  },
  "GET /gists/{gist_id}/forks": {
    name: "List gist forks",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#list-gist-forks",
  },
  "POST /gists/{gist_id}/forks": {
    name: "Fork a gist",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#fork-a-gist",
  },
  "GET /gists/{gist_id}/star": {
    name: "Check if a gist is starred",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#check-if-a-gist-is-starred",
  },
  "PUT /gists/{gist_id}/star": {
    name: "Star a gist",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#star-a-gist",
  },
  "DELETE /gists/{gist_id}/star": {
    name: "Unstar a gist",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#unstar-a-gist",
  },
  "GET /gists/{gist_id}/{sha}": {
    name: "Get a gist revision",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#get-a-gist-revision",
  },
  "GET /gitignore/templates": {
    name: "Get all gitignore templates",
    documentationUrl:
      "https://docs.github.com/rest/reference/gitignore#get-all-gitignore-templates",
  },
  "GET /gitignore/templates/{name}": {
    name: "Get a gitignore template",
    documentationUrl:
      "https://docs.github.com/rest/reference/gitignore#get-a-gitignore-template",
  },
  "GET /installation/repositories": {
    name: "List repositories accessible to the app installation",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-app-installation",
  },
  "DELETE /installation/token": {
    name: "Revoke an installation access token",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#revoke-an-installation-access-token",
  },
  "GET /issues": {
    name: "List issues assigned to the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-issues-assigned-to-the-authenticated-user",
  },
  "GET /licenses": {
    name: "Get all commonly used licenses",
    documentationUrl:
      "https://docs.github.com/rest/reference/licenses#get-all-commonly-used-licenses",
  },
  "GET /licenses/{license}": {
    name: "Get a license",
    documentationUrl:
      "https://docs.github.com/rest/reference/licenses#get-a-license",
  },
  "POST /markdown": {
    name: "Render a Markdown document",
    documentationUrl:
      "https://docs.github.com/rest/reference/markdown#render-a-markdown-document",
  },
  "POST /markdown/raw": {
    name: "Render a Markdown document in raw mode",
    documentationUrl:
      "https://docs.github.com/rest/reference/markdown#render-a-markdown-document-in-raw-mode",
  },
  "GET /marketplace_listing/accounts/{account_id}": {
    name: "Get a subscription plan for an account",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account",
  },
  "GET /marketplace_listing/plans": {
    name: "List plans",
    documentationUrl: "https://docs.github.com/rest/reference/apps#list-plans",
  },
  "GET /marketplace_listing/plans/{plan_id}/accounts": {
    name: "List accounts for a plan",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan",
  },
  "GET /marketplace_listing/stubbed/accounts/{account_id}": {
    name: "Get a subscription plan for an account (stubbed)",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account-stubbed",
  },
  "GET /marketplace_listing/stubbed/plans": {
    name: "List plans (stubbed)",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-plans-stubbed",
  },
  "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts": {
    name: "List accounts for a plan (stubbed)",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan-stubbed",
  },
  "GET /meta": {
    name: "Get GitHub meta information",
    documentationUrl:
      "https://docs.github.com/rest/reference/meta#get-github-meta-information",
  },
  "GET /networks/{owner}/{repo}/events": {
    name: "List public events for a network of repositories",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-public-events-for-a-network-of-repositories",
  },
  "GET /notifications": {
    name: "List notifications for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user",
  },
  "PUT /notifications": {
    name: "Mark notifications as read",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#mark-notifications-as-read",
  },
  "GET /notifications/threads/{thread_id}": {
    name: "Get a thread",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#get-a-thread",
  },
  "PATCH /notifications/threads/{thread_id}": {
    name: "Mark a thread as read",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#mark-a-thread-as-read",
  },
  "GET /notifications/threads/{thread_id}/subscription": {
    name: "Get a thread subscription for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user",
  },
  "PUT /notifications/threads/{thread_id}/subscription": {
    name: "Set a thread subscription",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#set-a-thread-subscription",
  },
  "DELETE /notifications/threads/{thread_id}/subscription": {
    name: "Delete a thread subscription",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#delete-a-thread-subscription",
  },
  "GET /octocat": {
    name: "Get Octocat",
    documentationUrl: "https://docs.github.com/rest/reference/meta#get-octocat",
  },
  "GET /organizations": {
    name: "List organizations",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-organizations",
  },
  "GET /orgs/{org}": {
    name: "Get an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#get-an-organization",
  },
  "PATCH /orgs/{org}": {
    name: "Update an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs/#update-an-organization",
  },
  "GET /orgs/{org}/actions/permissions": {
    name: "Get GitHub Actions permissions for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-an-organization",
  },
  "PUT /orgs/{org}/actions/permissions": {
    name: "Set GitHub Actions permissions for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization",
  },
  "GET /orgs/{org}/actions/permissions/repositories": {
    name:
      "List selected repositories enabled for GitHub Actions in an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization",
  },
  "PUT /orgs/{org}/actions/permissions/repositories": {
    name:
      "Set selected repositories enabled for GitHub Actions in an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization",
  },
  "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}": {
    name: "Enable a selected repository for GitHub Actions in an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization",
  },
  "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}": {
    name: "Disable a selected repository for GitHub Actions in an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization",
  },
  "GET /orgs/{org}/actions/permissions/selected-actions": {
    name: "Get allowed actions for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-allowed-actions-for-an-organization",
  },
  "PUT /orgs/{org}/actions/permissions/selected-actions": {
    name: "Set allowed actions for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#set-allowed-actions-for-an-organization",
  },
  "GET /orgs/{org}/actions/runner-groups": {
    name: "List self-hosted runner groups for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization",
  },
  "POST /orgs/{org}/actions/runner-groups": {
    name: "Create a self-hosted runner group for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization",
  },
  "GET /orgs/{org}/actions/runner-groups/{runner_group_id}": {
    name: "Get a self-hosted runner group for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization",
  },
  "PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}": {
    name: "Update a self-hosted runner group for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization",
  },
  "DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}": {
    name: "Delete a self-hosted runner group from an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization",
  },
  "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories": {
    name:
      "List repository access to a self-hosted runner group in an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization",
  },
  "PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories": {
    name:
      "Set repository access for a self-hosted runner group in an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization",
  },
  "PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}": {
    name:
      "Add repository access to a self-hosted runner group in an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization",
  },
  "DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}": {
    name:
      "Remove repository access to a self-hosted runner group in an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization",
  },
  "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners": {
    name: "List self-hosted runners in a group for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization",
  },
  "PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners": {
    name: "Set self-hosted runners in a group for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization",
  },
  "PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}": {
    name: "Add a self-hosted runner to a group for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization",
  },
  "DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}": {
    name: "Remove a self-hosted runner from a group for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization",
  },
  "GET /orgs/{org}/actions/runners": {
    name: "List self-hosted runners for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-an-organization",
  },
  "GET /orgs/{org}/actions/runners/downloads": {
    name: "List runner applications for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-runner-applications-for-an-organization",
  },
  "POST /orgs/{org}/actions/runners/registration-token": {
    name: "Create a registration token for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#create-a-registration-token-for-an-organization",
  },
  "POST /orgs/{org}/actions/runners/remove-token": {
    name: "Create a remove token for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#create-a-remove-token-for-an-organization",
  },
  "GET /orgs/{org}/actions/runners/{runner_id}": {
    name: "Get a self-hosted runner for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-an-organization",
  },
  "DELETE /orgs/{org}/actions/runners/{runner_id}": {
    name: "Delete a self-hosted runner from an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization",
  },
  "GET /orgs/{org}/actions/secrets": {
    name: "List organization secrets",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-organization-secrets",
  },
  "GET /orgs/{org}/actions/secrets/public-key": {
    name: "Get an organization public key",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-an-organization-public-key",
  },
  "GET /orgs/{org}/actions/secrets/{secret_name}": {
    name: "Get an organization secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-an-organization-secret",
  },
  "PUT /orgs/{org}/actions/secrets/{secret_name}": {
    name: "Create or update an organization secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret",
  },
  "DELETE /orgs/{org}/actions/secrets/{secret_name}": {
    name: "Delete an organization secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#delete-an-organization-secret",
  },
  "GET /orgs/{org}/actions/secrets/{secret_name}/repositories": {
    name: "List selected repositories for an organization secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret",
  },
  "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories": {
    name: "Set selected repositories for an organization secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret",
  },
  "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}": {
    name: "Add selected repository to an organization secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#add-selected-repository-to-an-organization-secret",
  },
  "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}": {
    name: "Remove selected repository from an organization secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret",
  },
  "GET /orgs/{org}/audit-log": {
    name: "Get the audit log for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#get-audit-log",
  },
  "GET /orgs/{org}/blocks": {
    name: "List users blocked by an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-users-blocked-by-an-organization",
  },
  "GET /orgs/{org}/blocks/{username}": {
    name: "Check if a user is blocked by an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization",
  },
  "PUT /orgs/{org}/blocks/{username}": {
    name: "Block a user from an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#block-a-user-from-an-organization",
  },
  "DELETE /orgs/{org}/blocks/{username}": {
    name: "Unblock a user from an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#unblock-a-user-from-an-organization",
  },
  "GET /orgs/{org}/credential-authorizations": {
    name: "List SAML SSO authorizations for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-saml-sso-authorizations-for-an-organization",
  },
  "DELETE /orgs/{org}/credential-authorizations/{credential_id}": {
    name: "Remove a SAML SSO authorization for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#remove-a-saml-sso-authorization-for-an-organization",
  },
  "GET /orgs/{org}/events": {
    name: "List public organization events",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-public-organization-events",
  },
  "GET /orgs/{org}/failed_invitations": {
    name: "List failed organization invitations",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-failed-organization-invitations",
  },
  "GET /orgs/{org}/hooks": {
    name: "List organization webhooks",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-organization-webhooks",
  },
  "POST /orgs/{org}/hooks": {
    name: "Create an organization webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#create-an-organization-webhook",
  },
  "GET /orgs/{org}/hooks/{hook_id}": {
    name: "Get an organization webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#get-an-organization-webhook",
  },
  "PATCH /orgs/{org}/hooks/{hook_id}": {
    name: "Update an organization webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#update-an-organization-webhook",
  },
  "DELETE /orgs/{org}/hooks/{hook_id}": {
    name: "Delete an organization webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#delete-an-organization-webhook",
  },
  "GET /orgs/{org}/hooks/{hook_id}/config": {
    name: "Get a webhook configuration for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#get-a-webhook-configuration-for-an-organization",
  },
  "PATCH /orgs/{org}/hooks/{hook_id}/config": {
    name: "Update a webhook configuration for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#update-a-webhook-configuration-for-an-organization",
  },
  "GET /orgs/{org}/hooks/{hook_id}/deliveries": {
    name: "List deliveries for an organization webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-deliveries-for-an-organization-webhook",
  },
  "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}": {
    name: "Get a webhook delivery for an organization webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook",
  },
  "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts": {
    name: "Redeliver a delivery for an organization webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook",
  },
  "POST /orgs/{org}/hooks/{hook_id}/pings": {
    name: "Ping an organization webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#ping-an-organization-webhook",
  },
  "GET /orgs/{org}/installation": {
    name: "Get an organization installation for the authenticated app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app",
  },
  "GET /orgs/{org}/installations": {
    name: "List app installations for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-app-installations-for-an-organization",
  },
  "GET /orgs/{org}/interaction-limits": {
    name: "Get interaction restrictions for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization",
  },
  "PUT /orgs/{org}/interaction-limits": {
    name: "Set interaction restrictions for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization",
  },
  "DELETE /orgs/{org}/interaction-limits": {
    name: "Remove interaction restrictions for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization",
  },
  "GET /orgs/{org}/invitations": {
    name: "List pending organization invitations",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-pending-organization-invitations",
  },
  "POST /orgs/{org}/invitations": {
    name: "Create an organization invitation",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#create-an-organization-invitation",
  },
  "DELETE /orgs/{org}/invitations/{invitation_id}": {
    name: "Cancel an organization invitation",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#cancel-an-organization-invitation",
  },
  "GET /orgs/{org}/invitations/{invitation_id}/teams": {
    name: "List organization invitation teams",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-organization-invitation-teams",
  },
  "GET /orgs/{org}/issues": {
    name: "List organization issues assigned to the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user",
  },
  "GET /orgs/{org}/members": {
    name: "List organization members",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-organization-members",
  },
  "GET /orgs/{org}/members/{username}": {
    name: "Check organization membership for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#check-organization-membership-for-a-user",
  },
  "DELETE /orgs/{org}/members/{username}": {
    name: "Remove an organization member",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#remove-an-organization-member",
  },
  "GET /orgs/{org}/memberships/{username}": {
    name: "Get organization membership for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user",
  },
  "PUT /orgs/{org}/memberships/{username}": {
    name: "Set organization membership for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#set-organization-membership-for-a-user",
  },
  "DELETE /orgs/{org}/memberships/{username}": {
    name: "Remove organization membership for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#remove-organization-membership-for-a-user",
  },
  "GET /orgs/{org}/migrations": {
    name: "List organization migrations",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#list-organization-migrations",
  },
  "POST /orgs/{org}/migrations": {
    name: "Start an organization migration",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#start-an-organization-migration",
  },
  "GET /orgs/{org}/migrations/{migration_id}": {
    name: "Get an organization migration status",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#get-an-organization-migration-status",
  },
  "GET /orgs/{org}/migrations/{migration_id}/archive": {
    name: "Download an organization migration archive",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#download-an-organization-migration-archive",
  },
  "DELETE /orgs/{org}/migrations/{migration_id}/archive": {
    name: "Delete an organization migration archive",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#delete-an-organization-migration-archive",
  },
  "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock": {
    name: "Unlock an organization repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#unlock-an-organization-repository",
  },
  "GET /orgs/{org}/migrations/{migration_id}/repositories": {
    name: "List repositories in an organization migration",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#list-repositories-in-an-organization-migration",
  },
  "GET /orgs/{org}/outside_collaborators": {
    name: "List outside collaborators for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-outside-collaborators-for-an-organization",
  },
  "PUT /orgs/{org}/outside_collaborators/{username}": {
    name: "Convert an organization member to outside collaborator",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator",
  },
  "DELETE /orgs/{org}/outside_collaborators/{username}": {
    name: "Remove outside collaborator from an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#remove-outside-collaborator-from-an-organization",
  },
  "GET /orgs/{org}/packages/{package_type}/{package_name}": {
    name: "Get a package for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization",
  },
  "DELETE /orgs/{org}/packages/{package_type}/{package_name}": {
    name: "Delete a package for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization",
  },
  "POST /orgs/{org}/packages/{package_type}/{package_name}/restore": {
    name: "Restore a package for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization",
  },
  "GET /orgs/{org}/packages/{package_type}/{package_name}/versions": {
    name: "Get all package versions for a package owned by an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-an-organization",
  },
  "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}": {
    name: "Get a package version for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization",
  },
  "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}": {
    name: "Delete package version for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization",
  },
  "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore": {
    name: "Restore package version for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization",
  },
  "GET /orgs/{org}/projects": {
    name: "List organization projects",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#list-organization-projects",
  },
  "POST /orgs/{org}/projects": {
    name: "Create an organization project",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#create-an-organization-project",
  },
  "GET /orgs/{org}/public_members": {
    name: "List public organization members",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-public-organization-members",
  },
  "GET /orgs/{org}/public_members/{username}": {
    name: "Check public organization membership for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#check-public-organization-membership-for-a-user",
  },
  "PUT /orgs/{org}/public_members/{username}": {
    name: "Set public organization membership for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user",
  },
  "DELETE /orgs/{org}/public_members/{username}": {
    name: "Remove public organization membership for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user",
  },
  "GET /orgs/{org}/repos": {
    name: "List organization repositories",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-organization-repositories",
  },
  "POST /orgs/{org}/repos": {
    name: "Create an organization repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-an-organization-repository",
  },
  "GET /orgs/{org}/settings/billing/actions": {
    name: "Get GitHub Actions billing for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-an-organization",
  },
  "GET /orgs/{org}/settings/billing/packages": {
    name: "Get GitHub Packages billing for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-an-organization",
  },
  "GET /orgs/{org}/settings/billing/shared-storage": {
    name: "Get shared storage billing for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-an-organization",
  },
  "GET /orgs/{org}/team-sync/groups": {
    name: "List IdP groups for an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-idp-groups-for-an-organization",
  },
  "GET /orgs/{org}/teams": {
    name: "List teams",
    documentationUrl: "https://docs.github.com/rest/reference/teams#list-teams",
  },
  "POST /orgs/{org}/teams": {
    name: "Create a team",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#create-a-team",
  },
  "GET /orgs/{org}/teams/{team_slug}": {
    name: "Get a team by name",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#get-a-team-by-name",
  },
  "PATCH /orgs/{org}/teams/{team_slug}": {
    name: "Update a team",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#update-a-team",
  },
  "DELETE /orgs/{org}/teams/{team_slug}": {
    name: "Delete a team",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#delete-a-team",
  },
  "GET /orgs/{org}/teams/{team_slug}/discussions": {
    name: "List discussions",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-discussions",
  },
  "POST /orgs/{org}/teams/{team_slug}/discussions": {
    name: "Create a discussion",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#create-a-discussion",
  },
  "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}": {
    name: "Get a discussion",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#get-a-discussion",
  },
  "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}": {
    name: "Update a discussion",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#update-a-discussion",
  },
  "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}": {
    name: "Delete a discussion",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#delete-a-discussion",
  },
  "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments": {
    name: "List discussion comments",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-discussion-comments",
  },
  "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments": {
    name: "Create a discussion comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#create-a-discussion-comment",
  },
  "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}": {
    name: "Get a discussion comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#get-a-discussion-comment",
  },
  "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}": {
    name: "Update a discussion comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#update-a-discussion-comment",
  },
  "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}": {
    name: "Delete a discussion comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#delete-a-discussion-comment",
  },
  "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions": {
    name: "List reactions for a team discussion comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion-comment",
  },
  "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions": {
    name: "Create reaction for a team discussion comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion-comment",
  },
  "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}": {
    name: "Delete team discussion comment reaction",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#delete-team-discussion-comment-reaction",
  },
  "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions": {
    name: "List reactions for a team discussion",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion",
  },
  "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions": {
    name: "Create reaction for a team discussion",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion",
  },
  "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}": {
    name: "Delete team discussion reaction",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#delete-team-discussion-reaction",
  },
  "GET /orgs/{org}/teams/{team_slug}/invitations": {
    name: "List pending team invitations",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-pending-team-invitations",
  },
  "GET /orgs/{org}/teams/{team_slug}/members": {
    name: "List team members",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-team-members",
  },
  "GET /orgs/{org}/teams/{team_slug}/memberships/{username}": {
    name: "Get team membership for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user",
  },
  "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}": {
    name: "Add or update team membership for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user",
  },
  "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}": {
    name: "Remove team membership for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user",
  },
  "GET /orgs/{org}/teams/{team_slug}/projects": {
    name: "List team projects",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-team-projects",
  },
  "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}": {
    name: "Check team permissions for a project",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-project",
  },
  "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}": {
    name: "Add or update team project permissions",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#add-or-update-team-project-permissions",
  },
  "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}": {
    name: "Remove a project from a team",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#remove-a-project-from-a-team",
  },
  "GET /orgs/{org}/teams/{team_slug}/repos": {
    name: "List team repositories",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-team-repositories",
  },
  "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}": {
    name: "Check team permissions for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-repository",
  },
  "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}": {
    name: "Add or update team repository permissions",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#add-or-update-team-repository-permissions",
  },
  "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}": {
    name: "Remove a repository from a team",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#remove-a-repository-from-a-team",
  },
  "GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings": {
    name: "List IdP groups for a team",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-idp-groups-for-a-team",
  },
  "PATCH /orgs/{org}/teams/{team_slug}/team-sync/group-mappings": {
    name: "Create or update IdP group connections",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#create-or-update-idp-group-connections",
  },
  "GET /orgs/{org}/teams/{team_slug}/teams": {
    name: "List child teams",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-child-teams",
  },
  "GET /projects/columns/cards/{card_id}": {
    name: "Get a project card",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#get-a-project-card",
  },
  "PATCH /projects/columns/cards/{card_id}": {
    name: "Update an existing project card",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#update-a-project-card",
  },
  "DELETE /projects/columns/cards/{card_id}": {
    name: "Delete a project card",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#delete-a-project-card",
  },
  "POST /projects/columns/cards/{card_id}/moves": {
    name: "Move a project card",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#move-a-project-card",
  },
  "GET /projects/columns/{column_id}": {
    name: "Get a project column",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#get-a-project-column",
  },
  "PATCH /projects/columns/{column_id}": {
    name: "Update an existing project column",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#update-a-project-column",
  },
  "DELETE /projects/columns/{column_id}": {
    name: "Delete a project column",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#delete-a-project-column",
  },
  "GET /projects/columns/{column_id}/cards": {
    name: "List project cards",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#list-project-cards",
  },
  "POST /projects/columns/{column_id}/cards": {
    name: "Create a project card",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#create-a-project-card",
  },
  "POST /projects/columns/{column_id}/moves": {
    name: "Move a project column",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#move-a-project-column",
  },
  "GET /projects/{project_id}": {
    name: "Get a project",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#get-a-project",
  },
  "PATCH /projects/{project_id}": {
    name: "Update a project",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#update-a-project",
  },
  "DELETE /projects/{project_id}": {
    name: "Delete a project",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#delete-a-project",
  },
  "GET /projects/{project_id}/collaborators": {
    name: "List project collaborators",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#list-project-collaborators",
  },
  "PUT /projects/{project_id}/collaborators/{username}": {
    name: "Add project collaborator",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#add-project-collaborator",
  },
  "DELETE /projects/{project_id}/collaborators/{username}": {
    name: "Remove user as a collaborator",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#remove-project-collaborator",
  },
  "GET /projects/{project_id}/collaborators/{username}/permission": {
    name: "Get project permission for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#get-project-permission-for-a-user",
  },
  "GET /projects/{project_id}/columns": {
    name: "List project columns",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#list-project-columns",
  },
  "POST /projects/{project_id}/columns": {
    name: "Create a project column",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#create-a-project-column",
  },
  "GET /rate_limit": {
    name: "Get rate limit status for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user",
  },
  "DELETE /reactions/{reaction_id}": {
    name: "Delete a reaction (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions/#delete-a-reaction-legacy",
  },
  "GET /repos/{owner}/{repo}": {
    name: "Get a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-repository",
  },
  "PATCH /repos/{owner}/{repo}": {
    name: "Update a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos/#update-a-repository",
  },
  "DELETE /repos/{owner}/{repo}": {
    name: "Delete a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-repository",
  },
  "GET /repos/{owner}/{repo}/actions/artifacts": {
    name: "List artifacts for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-artifacts-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}": {
    name: "Get an artifact",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-an-artifact",
  },
  "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}": {
    name: "Delete an artifact",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#delete-an-artifact",
  },
  "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}": {
    name: "Download an artifact",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#download-an-artifact",
  },
  "GET /repos/{owner}/{repo}/actions/jobs/{job_id}": {
    name: "Get a job for a workflow run",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-a-job-for-a-workflow-run",
  },
  "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs": {
    name: "Download job logs for a workflow run",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#download-job-logs-for-a-workflow-run",
  },
  "GET /repos/{owner}/{repo}/actions/permissions": {
    name: "Get GitHub Actions permissions for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-a-repository",
  },
  "PUT /repos/{owner}/{repo}/actions/permissions": {
    name: "Set GitHub Actions permissions for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/actions/permissions/selected-actions": {
    name: "Get allowed actions for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-allowed-actions-for-a-repository",
  },
  "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions": {
    name: "Set allowed actions for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#set-allowed-actions-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/actions/runners": {
    name: "List self-hosted runners for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/actions/runners/downloads": {
    name: "List runner applications for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-runner-applications-for-a-repository",
  },
  "POST /repos/{owner}/{repo}/actions/runners/registration-token": {
    name: "Create a registration token for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#create-a-registration-token-for-a-repository",
  },
  "POST /repos/{owner}/{repo}/actions/runners/remove-token": {
    name: "Create a remove token for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#create-a-remove-token-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/actions/runners/{runner_id}": {
    name: "Get a self-hosted runner for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-a-repository",
  },
  "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}": {
    name: "Delete a self-hosted runner from a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository",
  },
  "GET /repos/{owner}/{repo}/actions/runs": {
    name: "List workflow runs for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-workflow-runs-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}": {
    name: "Get a workflow run",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-a-workflow-run",
  },
  "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}": {
    name: "Delete a workflow run",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#delete-a-workflow-run",
  },
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals": {
    name: "Get the review history for a workflow run",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-the-review-history-for-a-workflow-run",
  },
  "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve": {
    name: "Approve a workflow run for a fork pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request",
  },
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts": {
    name: "List workflow run artifacts",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-workflow-run-artifacts",
  },
  "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel": {
    name: "Cancel a workflow run",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#cancel-a-workflow-run",
  },
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs": {
    name: "List jobs for a workflow run",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run",
  },
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs": {
    name: "Download workflow run logs",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#download-workflow-run-logs",
  },
  "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs": {
    name: "Delete workflow run logs",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#delete-workflow-run-logs",
  },
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments": {
    name: "Get pending deployments for a workflow run",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-pending-deployments-for-a-workflow-run",
  },
  "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments": {
    name: "Review pending deployments for a workflow run",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#review-pending-deployments-for-a-workflow-run",
  },
  "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun": {
    name: "Re-run a workflow",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#re-run-a-workflow",
  },
  "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing": {
    name: "Get workflow run usage",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-workflow-run-usage",
  },
  "GET /repos/{owner}/{repo}/actions/secrets": {
    name: "List repository secrets",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-repository-secrets",
  },
  "GET /repos/{owner}/{repo}/actions/secrets/public-key": {
    name: "Get a repository public key",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-a-repository-public-key",
  },
  "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}": {
    name: "Get a repository secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-a-repository-secret",
  },
  "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}": {
    name: "Create or update a repository secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#create-or-update-a-repository-secret",
  },
  "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}": {
    name: "Delete a repository secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#delete-a-repository-secret",
  },
  "GET /repos/{owner}/{repo}/actions/workflows": {
    name: "List repository workflows",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-repository-workflows",
  },
  "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}": {
    name: "Get a workflow",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-a-workflow",
  },
  "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable": {
    name: "Disable a workflow",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#disable-a-workflow",
  },
  "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches": {
    name: "Create a workflow dispatch event",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#create-a-workflow-dispatch-event",
  },
  "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable": {
    name: "Enable a workflow",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#enable-a-workflow",
  },
  "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs": {
    name: "List workflow runs",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-workflow-runs",
  },
  "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing": {
    name: "Get workflow usage",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-workflow-usage",
  },
  "GET /repos/{owner}/{repo}/assignees": {
    name: "List assignees",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-assignees",
  },
  "GET /repos/{owner}/{repo}/assignees/{assignee}": {
    name: "Check if a user can be assigned",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#check-if-a-user-can-be-assigned",
  },
  "PUT /repos/{owner}/{repo}/automated-security-fixes": {
    name: "Enable automated security fixes",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#enable-automated-security-fixes",
  },
  "DELETE /repos/{owner}/{repo}/automated-security-fixes": {
    name: "Disable automated security fixes",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#disable-automated-security-fixes",
  },
  "GET /repos/{owner}/{repo}/branches": {
    name: "List branches",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-branches",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}": {
    name: "Get a branch",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-branch",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection": {
    name: "Get branch protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-branch-protection",
  },
  "PUT /repos/{owner}/{repo}/branches/{branch}/protection": {
    name: "Update branch protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-branch-protection",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection": {
    name: "Delete branch protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-branch-protection",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins": {
    name: "Get admin branch protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-admin-branch-protection",
  },
  "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins": {
    name: "Set admin branch protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#set-admin-branch-protection",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins": {
    name: "Delete admin branch protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-admin-branch-protection",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews": {
    name: "Get pull request review protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-pull-request-review-protection",
  },
  "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews": {
    name: "Update pull request review protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-pull-request-review-protection",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews": {
    name: "Delete pull request review protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-pull-request-review-protection",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures": {
    name: "Get commit signature protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-commit-signature-protection",
  },
  "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures": {
    name: "Create commit signature protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-commit-signature-protection",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures": {
    name: "Delete commit signature protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-commit-signature-protection",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks": {
    name: "Get status checks protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-status-checks-protection",
  },
  "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks": {
    name: "Update status check protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-status-check-potection",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks": {
    name: "Remove status check protection",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#remove-status-check-protection",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts": {
    name: "Get all status check contexts",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-all-status-check-contexts",
  },
  "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts": {
    name: "Add status check contexts",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#add-status-check-contexts",
  },
  "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts": {
    name: "Set status check contexts",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#set-status-check-contexts",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts": {
    name: "Remove status check contexts",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#remove-status-check-contexts",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions": {
    name: "Get access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-access-restrictions",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions": {
    name: "Delete access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-access-restrictions",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps": {
    name: "Get apps with access to the protected branch",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-apps-with-access-to-the-protected-branch",
  },
  "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps": {
    name: "Add app access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#add-app-access-restrictions",
  },
  "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps": {
    name: "Set app access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#set-app-access-restrictions",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps": {
    name: "Remove app access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#remove-app-access-restrictions",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams": {
    name: "Get teams with access to the protected branch",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-teams-with-access-to-the-protected-branch",
  },
  "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams": {
    name: "Add team access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#add-team-access-restrictions",
  },
  "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams": {
    name: "Set team access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#set-team-access-restrictions",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams": {
    name: "Remove team access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#remove-team-access-restrictions",
  },
  "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users": {
    name: "Get users with access to the protected branch",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-users-with-access-to-the-protected-branch",
  },
  "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users": {
    name: "Add user access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#add-user-access-restrictions",
  },
  "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users": {
    name: "Set user access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#set-user-access-restrictions",
  },
  "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users": {
    name: "Remove user access restrictions",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#remove-user-access-restrictions",
  },
  "POST /repos/{owner}/{repo}/branches/{branch}/rename": {
    name: "Rename a branch",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#rename-a-branch",
  },
  "POST /repos/{owner}/{repo}/check-runs": {
    name: "Create a check run",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#create-a-check-run",
  },
  "GET /repos/{owner}/{repo}/check-runs/{check_run_id}": {
    name: "Get a check run",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#get-a-check-run",
  },
  "PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}": {
    name: "Update a check run",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#update-a-check-run",
  },
  "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations": {
    name: "List check run annotations",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#list-check-run-annotations",
  },
  "POST /repos/{owner}/{repo}/check-suites": {
    name: "Create a check suite",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#create-a-check-suite",
  },
  "PATCH /repos/{owner}/{repo}/check-suites/preferences": {
    name: "Update repository preferences for check suites",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites",
  },
  "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}": {
    name: "Get a check suite",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#get-a-check-suite",
  },
  "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs": {
    name: "List check runs in a check suite",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#list-check-runs-in-a-check-suite",
  },
  "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest": {
    name: "Rerequest a check suite",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#rerequest-a-check-suite",
  },
  "GET /repos/{owner}/{repo}/code-scanning/alerts": {
    name: "List code scanning alerts for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}": {
    name: "Get a code scanning alert",
    documentationUrl:
      "https://docs.github.com/rest/reference/code-scanning#get-a-code-scanning-alert",
  },
  "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}": {
    name: "Update a code scanning alert",
    documentationUrl:
      "https://docs.github.com/rest/reference/code-scanning#update-a-code-scanning-alert",
  },
  "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances": {
    name: "List instances of a code scanning alert",
    documentationUrl:
      "https://docs.github.com/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert",
  },
  "GET /repos/{owner}/{repo}/code-scanning/analyses": {
    name: "List code scanning analyses for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}": {
    name: "Get a code scanning analysis for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository",
  },
  "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}": {
    name: "Delete a code scanning analysis from a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository",
  },
  "POST /repos/{owner}/{repo}/code-scanning/sarifs": {
    name: "Upload an analysis as SARIF data",
    documentationUrl:
      "https://docs.github.com/rest/reference/code-scanning#upload-a-sarif-file",
  },
  "GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}": {
    name: "Get information about a SARIF upload",
    documentationUrl:
      "https://docs.github.com/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/collaborators": {
    name: "List repository collaborators",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repository-collaborators",
  },
  "GET /repos/{owner}/{repo}/collaborators/{username}": {
    name: "Check if a user is a repository collaborator",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#check-if-a-user-is-a-repository-collaborator",
  },
  "PUT /repos/{owner}/{repo}/collaborators/{username}": {
    name: "Add a repository collaborator",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#add-a-repository-collaborator",
  },
  "DELETE /repos/{owner}/{repo}/collaborators/{username}": {
    name: "Remove a repository collaborator",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#remove-a-repository-collaborator",
  },
  "GET /repos/{owner}/{repo}/collaborators/{username}/permission": {
    name: "Get repository permissions for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-repository-permissions-for-a-user",
  },
  "GET /repos/{owner}/{repo}/comments": {
    name: "List commit comments for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-commit-comments-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/comments/{comment_id}": {
    name: "Get a commit comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-commit-comment",
  },
  "PATCH /repos/{owner}/{repo}/comments/{comment_id}": {
    name: "Update a commit comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-a-commit-comment",
  },
  "DELETE /repos/{owner}/{repo}/comments/{comment_id}": {
    name: "Delete a commit comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-commit-comment",
  },
  "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions": {
    name: "List reactions for a commit comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#list-reactions-for-a-commit-comment",
  },
  "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions": {
    name: "Create reaction for a commit comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#create-reaction-for-a-commit-comment",
  },
  "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}": {
    name: "Delete a commit comment reaction",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#delete-a-commit-comment-reaction",
  },
  "GET /repos/{owner}/{repo}/commits": {
    name: "List commits",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-commits",
  },
  "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head": {
    name: "List branches for HEAD commit",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-branches-for-head-commit",
  },
  "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments": {
    name: "List commit comments",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-commit-comments",
  },
  "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments": {
    name: "Create a commit comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-commit-comment",
  },
  "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls": {
    name: "List pull requests associated with a commit",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-pull-requests-associated-with-a-commit",
  },
  "GET /repos/{owner}/{repo}/commits/{ref}": {
    name: "Get a commit",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-commit",
  },
  "GET /repos/{owner}/{repo}/commits/{ref}/check-runs": {
    name: "List check runs for a Git reference",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#list-check-runs-for-a-git-reference",
  },
  "GET /repos/{owner}/{repo}/commits/{ref}/check-suites": {
    name: "List check suites for a Git reference",
    documentationUrl:
      "https://docs.github.com/rest/reference/checks#list-check-suites-for-a-git-reference",
  },
  "GET /repos/{owner}/{repo}/commits/{ref}/status": {
    name: "Get the combined status for a specific reference",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-the-combined-status-for-a-specific-reference",
  },
  "GET /repos/{owner}/{repo}/commits/{ref}/statuses": {
    name: "List commit statuses for a reference",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-commit-statuses-for-a-reference",
  },
  "GET /repos/{owner}/{repo}/community/code_of_conduct": {
    name: "Get the code of conduct for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/codes-of-conduct#get-the-code-of-conduct-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/community/profile": {
    name: "Get community profile metrics",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-community-profile-metrics",
  },
  "GET /repos/{owner}/{repo}/compare/{basehead}": {
    name: "Compare two commits",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#compare-two-commits",
  },
  "POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments": {
    name: "Create a content attachment",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#create-a-content-attachment",
  },
  "GET /repos/{owner}/{repo}/contents/{path}": {
    name: "Get repository content",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-repository-content",
  },
  "PUT /repos/{owner}/{repo}/contents/{path}": {
    name: "Create or update file contents",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-or-update-file-contents",
  },
  "DELETE /repos/{owner}/{repo}/contents/{path}": {
    name: "Delete a file",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-file",
  },
  "GET /repos/{owner}/{repo}/contributors": {
    name: "List repository contributors",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repository-contributors",
  },
  "GET /repos/{owner}/{repo}/deployments": {
    name: "List deployments",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-deployments",
  },
  "POST /repos/{owner}/{repo}/deployments": {
    name: "Create a deployment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-deployment",
  },
  "GET /repos/{owner}/{repo}/deployments/{deployment_id}": {
    name: "Get a deployment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-deployment",
  },
  "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}": {
    name: "Delete a deployment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-deployment",
  },
  "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses": {
    name: "List deployment statuses",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-deployment-statuses",
  },
  "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses": {
    name: "Create a deployment status",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-deployment-status",
  },
  "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}": {
    name: "Get a deployment status",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-deployment-status",
  },
  "POST /repos/{owner}/{repo}/dispatches": {
    name: "Create a repository dispatch event",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-repository-dispatch-event",
  },
  "GET /repos/{owner}/{repo}/environments": {
    name: "Get all environments",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-all-environments",
  },
  "GET /repos/{owner}/{repo}/environments/{environment_name}": {
    name: "Get an environment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-an-environment",
  },
  "PUT /repos/{owner}/{repo}/environments/{environment_name}": {
    name: "Create or update an environment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-or-update-an-environment",
  },
  "DELETE /repos/{owner}/{repo}/environments/{environment_name}": {
    name: "Delete an environment",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-an-environment",
  },
  "GET /repos/{owner}/{repo}/events": {
    name: "List repository events",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-repository-events",
  },
  "GET /repos/{owner}/{repo}/forks": {
    name: "List forks",
    documentationUrl: "https://docs.github.com/rest/reference/repos#list-forks",
  },
  "POST /repos/{owner}/{repo}/forks": {
    name: "Create a fork",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-fork",
  },
  "POST /repos/{owner}/{repo}/git/blobs": {
    name: "Create a blob",
    documentationUrl:
      "https://docs.github.com/rest/reference/git#create-a-blob",
  },
  "GET /repos/{owner}/{repo}/git/blobs/{file_sha}": {
    name: "Get a blob",
    documentationUrl: "https://docs.github.com/rest/reference/git#get-a-blob",
  },
  "POST /repos/{owner}/{repo}/git/commits": {
    name: "Create a commit",
    documentationUrl:
      "https://docs.github.com/rest/reference/git#create-a-commit",
  },
  "GET /repos/{owner}/{repo}/git/commits/{commit_sha}": {
    name: "Get a commit",
    documentationUrl: "https://docs.github.com/rest/reference/git#get-a-commit",
  },
  "GET /repos/{owner}/{repo}/git/matching-refs/{ref}": {
    name: "List matching references",
    documentationUrl:
      "https://docs.github.com/rest/reference/git#list-matching-references",
  },
  "GET /repos/{owner}/{repo}/git/ref/{ref}": {
    name: "Get a reference",
    documentationUrl:
      "https://docs.github.com/rest/reference/git#get-a-reference",
  },
  "POST /repos/{owner}/{repo}/git/refs": {
    name: "Create a reference",
    documentationUrl:
      "https://docs.github.com/rest/reference/git#create-a-reference",
  },
  "PATCH /repos/{owner}/{repo}/git/refs/{ref}": {
    name: "Update a reference",
    documentationUrl:
      "https://docs.github.com/rest/reference/git#update-a-reference",
  },
  "DELETE /repos/{owner}/{repo}/git/refs/{ref}": {
    name: "Delete a reference",
    documentationUrl:
      "https://docs.github.com/rest/reference/git#delete-a-reference",
  },
  "POST /repos/{owner}/{repo}/git/tags": {
    name: "Create a tag object",
    documentationUrl:
      "https://docs.github.com/rest/reference/git#create-a-tag-object",
  },
  "GET /repos/{owner}/{repo}/git/tags/{tag_sha}": {
    name: "Get a tag",
    documentationUrl: "https://docs.github.com/rest/reference/git#get-a-tag",
  },
  "POST /repos/{owner}/{repo}/git/trees": {
    name: "Create a tree",
    documentationUrl:
      "https://docs.github.com/rest/reference/git#create-a-tree",
  },
  "GET /repos/{owner}/{repo}/git/trees/{tree_sha}": {
    name: "Get a tree",
    documentationUrl: "https://docs.github.com/rest/reference/git#get-a-tree",
  },
  "GET /repos/{owner}/{repo}/hooks": {
    name: "List repository webhooks",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repository-webhooks",
  },
  "POST /repos/{owner}/{repo}/hooks": {
    name: "Create a repository webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-repository-webhook",
  },
  "GET /repos/{owner}/{repo}/hooks/{hook_id}": {
    name: "Get a repository webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-repository-webhook",
  },
  "PATCH /repos/{owner}/{repo}/hooks/{hook_id}": {
    name: "Update a repository webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-a-repository-webhook",
  },
  "DELETE /repos/{owner}/{repo}/hooks/{hook_id}": {
    name: "Delete a repository webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-repository-webhook",
  },
  "GET /repos/{owner}/{repo}/hooks/{hook_id}/config": {
    name: "Get a webhook configuration for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-webhook-configuration-for-a-repository",
  },
  "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config": {
    name: "Update a webhook configuration for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-a-webhook-configuration-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries": {
    name: "List deliveries for a repository webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-deliveries-for-a-repository-webhook",
  },
  "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}": {
    name: "Get a delivery for a repository webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-delivery-for-a-repository-webhook",
  },
  "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts": {
    name: "Redeliver a delivery for a repository webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#redeliver-a-delivery-for-a-repository-webhook",
  },
  "POST /repos/{owner}/{repo}/hooks/{hook_id}/pings": {
    name: "Ping a repository webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#ping-a-repository-webhook",
  },
  "POST /repos/{owner}/{repo}/hooks/{hook_id}/tests": {
    name: "Test the push repository webhook",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#test-the-push-repository-webhook",
  },
  "GET /repos/{owner}/{repo}/import": {
    name: "Get an import status",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#get-an-import-status",
  },
  "PUT /repos/{owner}/{repo}/import": {
    name: "Start an import",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#start-an-import",
  },
  "PATCH /repos/{owner}/{repo}/import": {
    name: "Update an import",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#update-an-import",
  },
  "DELETE /repos/{owner}/{repo}/import": {
    name: "Cancel an import",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#cancel-an-import",
  },
  "GET /repos/{owner}/{repo}/import/authors": {
    name: "Get commit authors",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#get-commit-authors",
  },
  "PATCH /repos/{owner}/{repo}/import/authors/{author_id}": {
    name: "Map a commit author",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#map-a-commit-author",
  },
  "GET /repos/{owner}/{repo}/import/large_files": {
    name: "Get large files",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#get-large-files",
  },
  "PATCH /repos/{owner}/{repo}/import/lfs": {
    name: "Update Git LFS preference",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#update-git-lfs-preference",
  },
  "GET /repos/{owner}/{repo}/installation": {
    name: "Get a repository installation for the authenticated app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app",
  },
  "GET /repos/{owner}/{repo}/interaction-limits": {
    name: "Get interaction restrictions for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository",
  },
  "PUT /repos/{owner}/{repo}/interaction-limits": {
    name: "Set interaction restrictions for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository",
  },
  "DELETE /repos/{owner}/{repo}/interaction-limits": {
    name: "Remove interaction restrictions for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/invitations": {
    name: "List repository invitations",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repository-invitations",
  },
  "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}": {
    name: "Update a repository invitation",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-a-repository-invitation",
  },
  "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}": {
    name: "Delete a repository invitation",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-repository-invitation",
  },
  "GET /repos/{owner}/{repo}/issues": {
    name: "List repository issues",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-repository-issues",
  },
  "POST /repos/{owner}/{repo}/issues": {
    name: "Create an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#create-an-issue",
  },
  "GET /repos/{owner}/{repo}/issues/comments": {
    name: "List issue comments for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-issue-comments-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/issues/comments/{comment_id}": {
    name: "Get an issue comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#get-an-issue-comment",
  },
  "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}": {
    name: "Update an issue comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#update-an-issue-comment",
  },
  "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}": {
    name: "Delete an issue comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#delete-an-issue-comment",
  },
  "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions": {
    name: "List reactions for an issue comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#list-reactions-for-an-issue-comment",
  },
  "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions": {
    name: "Create reaction for an issue comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#create-reaction-for-an-issue-comment",
  },
  "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}": {
    name: "Delete an issue comment reaction",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#delete-an-issue-comment-reaction",
  },
  "GET /repos/{owner}/{repo}/issues/events": {
    name: "List issue events for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-issue-events-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/issues/events/{event_id}": {
    name: "Get an issue event",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#get-an-issue-event",
  },
  "GET /repos/{owner}/{repo}/issues/{issue_number}": {
    name: "Get an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#get-an-issue",
  },
  "PATCH /repos/{owner}/{repo}/issues/{issue_number}": {
    name: "Update an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues/#update-an-issue",
  },
  "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees": {
    name: "Add assignees to an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#add-assignees-to-an-issue",
  },
  "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees": {
    name: "Remove assignees from an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#remove-assignees-from-an-issue",
  },
  "GET /repos/{owner}/{repo}/issues/{issue_number}/comments": {
    name: "List issue comments",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-issue-comments",
  },
  "POST /repos/{owner}/{repo}/issues/{issue_number}/comments": {
    name: "Create an issue comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#create-an-issue-comment",
  },
  "GET /repos/{owner}/{repo}/issues/{issue_number}/events": {
    name: "List issue events",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-issue-events",
  },
  "GET /repos/{owner}/{repo}/issues/{issue_number}/labels": {
    name: "List labels for an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-labels-for-an-issue",
  },
  "POST /repos/{owner}/{repo}/issues/{issue_number}/labels": {
    name: "Add labels to an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#add-labels-to-an-issue",
  },
  "PUT /repos/{owner}/{repo}/issues/{issue_number}/labels": {
    name: "Set labels for an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#set-labels-for-an-issue",
  },
  "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels": {
    name: "Remove all labels from an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#remove-all-labels-from-an-issue",
  },
  "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}": {
    name: "Remove a label from an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#remove-a-label-from-an-issue",
  },
  "PUT /repos/{owner}/{repo}/issues/{issue_number}/lock": {
    name: "Lock an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#lock-an-issue",
  },
  "DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock": {
    name: "Unlock an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#unlock-an-issue",
  },
  "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions": {
    name: "List reactions for an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#list-reactions-for-an-issue",
  },
  "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions": {
    name: "Create reaction for an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#create-reaction-for-an-issue",
  },
  "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}": {
    name: "Delete an issue reaction",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#delete-an-issue-reaction",
  },
  "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline": {
    name: "List timeline events for an issue",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-timeline-events-for-an-issue",
  },
  "GET /repos/{owner}/{repo}/keys": {
    name: "List deploy keys",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-deploy-keys",
  },
  "POST /repos/{owner}/{repo}/keys": {
    name: "Create a deploy key",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-deploy-key",
  },
  "GET /repos/{owner}/{repo}/keys/{key_id}": {
    name: "Get a deploy key",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-deploy-key",
  },
  "DELETE /repos/{owner}/{repo}/keys/{key_id}": {
    name: "Delete a deploy key",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-deploy-key",
  },
  "GET /repos/{owner}/{repo}/labels": {
    name: "List labels for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-labels-for-a-repository",
  },
  "POST /repos/{owner}/{repo}/labels": {
    name: "Create a label",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#create-a-label",
  },
  "GET /repos/{owner}/{repo}/labels/{name}": {
    name: "Get a label",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#get-a-label",
  },
  "PATCH /repos/{owner}/{repo}/labels/{name}": {
    name: "Update a label",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#update-a-label",
  },
  "DELETE /repos/{owner}/{repo}/labels/{name}": {
    name: "Delete a label",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#delete-a-label",
  },
  "GET /repos/{owner}/{repo}/languages": {
    name: "List repository languages",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repository-languages",
  },
  "GET /repos/{owner}/{repo}/license": {
    name: "Get the license for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/licenses/#get-the-license-for-a-repository",
  },
  "POST /repos/{owner}/{repo}/merges": {
    name: "Merge a branch",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#merge-a-branch",
  },
  "GET /repos/{owner}/{repo}/milestones": {
    name: "List milestones",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-milestones",
  },
  "POST /repos/{owner}/{repo}/milestones": {
    name: "Create a milestone",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#create-a-milestone",
  },
  "GET /repos/{owner}/{repo}/milestones/{milestone_number}": {
    name: "Get a milestone",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#get-a-milestone",
  },
  "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}": {
    name: "Update a milestone",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#update-a-milestone",
  },
  "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}": {
    name: "Delete a milestone",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#delete-a-milestone",
  },
  "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels": {
    name: "List labels for issues in a milestone",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-labels-for-issues-in-a-milestone",
  },
  "GET /repos/{owner}/{repo}/notifications": {
    name: "List repository notifications for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user",
  },
  "PUT /repos/{owner}/{repo}/notifications": {
    name: "Mark repository notifications as read",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#mark-repository-notifications-as-read",
  },
  "GET /repos/{owner}/{repo}/pages": {
    name: "Get a GitHub Pages site",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-github-pages-site",
  },
  "POST /repos/{owner}/{repo}/pages": {
    name: "Create a GitHub Pages site",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-github-pages-site",
  },
  "PUT /repos/{owner}/{repo}/pages": {
    name: "Update information about a GitHub Pages site",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-information-about-a-github-pages-site",
  },
  "DELETE /repos/{owner}/{repo}/pages": {
    name: "Delete a GitHub Pages site",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-github-pages-site",
  },
  "GET /repos/{owner}/{repo}/pages/builds": {
    name: "List GitHub Pages builds",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-github-pages-builds",
  },
  "POST /repos/{owner}/{repo}/pages/builds": {
    name: "Request a GitHub Pages build",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#request-a-github-pages-build",
  },
  "GET /repos/{owner}/{repo}/pages/builds/latest": {
    name: "Get latest Pages build",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-latest-pages-build",
  },
  "GET /repos/{owner}/{repo}/pages/builds/{build_id}": {
    name: "Get GitHub Pages build",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-github-pages-build",
  },
  "GET /repos/{owner}/{repo}/pages/health": {
    name: "Get a DNS health check for GitHub Pages",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-dns-health-check-for-github-pages",
  },
  "GET /repos/{owner}/{repo}/projects": {
    name: "List repository projects",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#list-repository-projects",
  },
  "POST /repos/{owner}/{repo}/projects": {
    name: "Create a repository project",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#create-a-repository-project",
  },
  "GET /repos/{owner}/{repo}/pulls": {
    name: "List pull requests",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#list-pull-requests",
  },
  "POST /repos/{owner}/{repo}/pulls": {
    name: "Create a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#create-a-pull-request",
  },
  "GET /repos/{owner}/{repo}/pulls/comments": {
    name: "List review comments in a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#list-review-comments-in-a-repository",
  },
  "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}": {
    name: "Get a review comment for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#get-a-review-comment-for-a-pull-request",
  },
  "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}": {
    name: "Update a review comment for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#update-a-review-comment-for-a-pull-request",
  },
  "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}": {
    name: "Delete a review comment for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#delete-a-review-comment-for-a-pull-request",
  },
  "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions": {
    name: "List reactions for a pull request review comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment",
  },
  "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions": {
    name: "Create reaction for a pull request review comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment",
  },
  "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}": {
    name: "Delete a pull request comment reaction",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions#delete-a-pull-request-comment-reaction",
  },
  "GET /repos/{owner}/{repo}/pulls/{pull_number}": {
    name: "Get a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#get-a-pull-request",
  },
  "PATCH /repos/{owner}/{repo}/pulls/{pull_number}": {
    name: "Update a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls/#update-a-pull-request",
  },
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments": {
    name: "List review comments on a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#list-review-comments-on-a-pull-request",
  },
  "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments": {
    name: "Create a review comment for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#create-a-review-comment-for-a-pull-request",
  },
  "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies": {
    name: "Create a reply for a review comment",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#create-a-reply-for-a-review-comment",
  },
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits": {
    name: "List commits on a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#list-commits-on-a-pull-request",
  },
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/files": {
    name: "List pull requests files",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#list-pull-requests-files",
  },
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/merge": {
    name: "Check if a pull request has been merged",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#check-if-a-pull-request-has-been-merged",
  },
  "PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge": {
    name: "Merge a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#merge-a-pull-request",
  },
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers": {
    name: "List requested reviewers for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#list-requested-reviewers-for-a-pull-request",
  },
  "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers": {
    name: "Request reviewers for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#request-reviewers-for-a-pull-request",
  },
  "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers": {
    name: "Remove requested reviewers from a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request",
  },
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews": {
    name: "List reviews for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#list-reviews-for-a-pull-request",
  },
  "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews": {
    name: "Create a review for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#create-a-review-for-a-pull-request",
  },
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}": {
    name: "Get a review for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#get-a-review-for-a-pull-request",
  },
  "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}": {
    name: "Update a review for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#update-a-review-for-a-pull-request",
  },
  "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}": {
    name: "Delete a pending review for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#delete-a-pending-review-for-a-pull-request",
  },
  "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments": {
    name: "List comments for a pull request review",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#list-comments-for-a-pull-request-review",
  },
  "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals": {
    name: "Dismiss a review for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#dismiss-a-review-for-a-pull-request",
  },
  "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events": {
    name: "Submit a review for a pull request",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#submit-a-review-for-a-pull-request",
  },
  "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch": {
    name: "Update a pull request branch",
    documentationUrl:
      "https://docs.github.com/rest/reference/pulls#update-a-pull-request-branch",
  },
  "GET /repos/{owner}/{repo}/readme": {
    name: "Get a repository README",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-repository-readme",
  },
  "GET /repos/{owner}/{repo}/readme/{dir}": {
    name: "Get a repository README for a directory",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-repository-directory-readme",
  },
  "GET /repos/{owner}/{repo}/releases": {
    name: "List releases",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-releases",
  },
  "POST /repos/{owner}/{repo}/releases": {
    name: "Create a release",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-release",
  },
  "GET /repos/{owner}/{repo}/releases/assets/{asset_id}": {
    name: "Get a release asset",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-release-asset",
  },
  "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}": {
    name: "Update a release asset",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-a-release-asset",
  },
  "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}": {
    name: "Delete a release asset",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-release-asset",
  },
  "GET /repos/{owner}/{repo}/releases/latest": {
    name: "Get the latest release",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-the-latest-release",
  },
  "GET /repos/{owner}/{repo}/releases/tags/{tag}": {
    name: "Get a release by tag name",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-release-by-tag-name",
  },
  "GET /repos/{owner}/{repo}/releases/{release_id}": {
    name: "Get a release",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-a-release",
  },
  "PATCH /repos/{owner}/{repo}/releases/{release_id}": {
    name: "Update a release",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#update-a-release",
  },
  "DELETE /repos/{owner}/{repo}/releases/{release_id}": {
    name: "Delete a release",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#delete-a-release",
  },
  "GET /repos/{owner}/{repo}/releases/{release_id}/assets": {
    name: "List release assets",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-release-assets",
  },
  "POST /repos/{owner}/{repo}/releases/{release_id}/assets": {
    name: "Upload a release asset",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#upload-a-release-asset",
  },
  "POST /repos/{owner}/{repo}/releases/{release_id}/reactions": {
    name: "Create reaction for a release",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-release",
  },
  "GET /repos/{owner}/{repo}/secret-scanning/alerts": {
    name: "List secret scanning alerts for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository",
  },
  "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}": {
    name: "Get a secret scanning alert",
    documentationUrl:
      "https://docs.github.com/rest/reference/secret-scanning#get-a-secret-scanning-alert",
  },
  "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}": {
    name: "Update a secret scanning alert",
    documentationUrl:
      "https://docs.github.com/rest/reference/secret-scanning#update-a-secret-scanning-alert",
  },
  "GET /repos/{owner}/{repo}/stargazers": {
    name: "List stargazers",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-stargazers",
  },
  "GET /repos/{owner}/{repo}/stats/code_frequency": {
    name: "Get the weekly commit activity",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-the-weekly-commit-activity",
  },
  "GET /repos/{owner}/{repo}/stats/commit_activity": {
    name: "Get the last year of commit activity",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-the-last-year-of-commit-activity",
  },
  "GET /repos/{owner}/{repo}/stats/contributors": {
    name: "Get all contributor commit activity",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-all-contributor-commit-activity",
  },
  "GET /repos/{owner}/{repo}/stats/participation": {
    name: "Get the weekly commit count",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-the-weekly-commit-count",
  },
  "GET /repos/{owner}/{repo}/stats/punch_card": {
    name: "Get the hourly commit count for each day",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-the-hourly-commit-count-for-each-day",
  },
  "POST /repos/{owner}/{repo}/statuses/{sha}": {
    name: "Create a commit status",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-commit-status",
  },
  "GET /repos/{owner}/{repo}/subscribers": {
    name: "List watchers",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-watchers",
  },
  "GET /repos/{owner}/{repo}/subscription": {
    name: "Get a repository subscription",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#get-a-repository-subscription",
  },
  "PUT /repos/{owner}/{repo}/subscription": {
    name: "Set a repository subscription",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#set-a-repository-subscription",
  },
  "DELETE /repos/{owner}/{repo}/subscription": {
    name: "Delete a repository subscription",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#delete-a-repository-subscription",
  },
  "GET /repos/{owner}/{repo}/tags": {
    name: "List repository tags",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repository-tags",
  },
  "GET /repos/{owner}/{repo}/tarball/{ref}": {
    name: "Download a repository archive (tar)",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#download-a-repository-archive",
  },
  "GET /repos/{owner}/{repo}/teams": {
    name: "List repository teams",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repository-teams",
  },
  "GET /repos/{owner}/{repo}/topics": {
    name: "Get all repository topics",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-all-repository-topics",
  },
  "PUT /repos/{owner}/{repo}/topics": {
    name: "Replace all repository topics",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#replace-all-repository-topics",
  },
  "GET /repos/{owner}/{repo}/traffic/clones": {
    name: "Get repository clones",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-repository-clones",
  },
  "GET /repos/{owner}/{repo}/traffic/popular/paths": {
    name: "Get top referral paths",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-top-referral-paths",
  },
  "GET /repos/{owner}/{repo}/traffic/popular/referrers": {
    name: "Get top referral sources",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-top-referral-sources",
  },
  "GET /repos/{owner}/{repo}/traffic/views": {
    name: "Get page views",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#get-page-views",
  },
  "POST /repos/{owner}/{repo}/transfer": {
    name: "Transfer a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#transfer-a-repository",
  },
  "GET /repos/{owner}/{repo}/vulnerability-alerts": {
    name: "Check if vulnerability alerts are enabled for a repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository",
  },
  "PUT /repos/{owner}/{repo}/vulnerability-alerts": {
    name: "Enable vulnerability alerts",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#enable-vulnerability-alerts",
  },
  "DELETE /repos/{owner}/{repo}/vulnerability-alerts": {
    name: "Disable vulnerability alerts",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#disable-vulnerability-alerts",
  },
  "GET /repos/{owner}/{repo}/zipball/{ref}": {
    name: "Download a repository archive (zip)",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#download-a-repository-archive",
  },
  "POST /repos/{template_owner}/{template_repo}/generate": {
    name: "Create a repository using a template",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-repository-using-a-template",
  },
  "GET /repositories": {
    name: "List public repositories",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-public-repositories",
  },
  "GET /repositories/{repository_id}/environments/{environment_name}/secrets": {
    name: "List environment secrets",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#list-environment-secrets",
  },
  "GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key": {
    name: "Get an environment public key",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-an-environment-public-key",
  },
  "GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}": {
    name: "Get an environment secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#get-an-environment-secret",
  },
  "PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}": {
    name: "Create or update an environment secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#create-or-update-an-environment-secret",
  },
  "DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}": {
    name: "Delete an environment secret",
    documentationUrl:
      "https://docs.github.com/rest/reference/actions#delete-an-environment-secret",
  },
  "GET /scim/v2/enterprises/{enterprise}/Groups": {
    name: "List provisioned SCIM groups for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise",
  },
  "POST /scim/v2/enterprises/{enterprise}/Groups": {
    name: "Provision a SCIM enterprise group and invite users",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#provision-a-scim-enterprise-group-and-invite-users",
  },
  "GET /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}": {
    name: "Get SCIM provisioning information for an enterprise group",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group",
  },
  "PUT /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}": {
    name: "Set SCIM information for a provisioned enterprise group",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group",
  },
  "PATCH /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}": {
    name: "Update an attribute for a SCIM enterprise group",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group",
  },
  "DELETE /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}": {
    name: "Delete a SCIM group from an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise",
  },
  "GET /scim/v2/enterprises/{enterprise}/Users": {
    name: "List SCIM provisioned identities for an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise",
  },
  "POST /scim/v2/enterprises/{enterprise}/Users": {
    name: "Provision and invite a SCIM enterprise user",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#provision-and-invite-a-scim-enterprise-user",
  },
  "GET /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}": {
    name: "Get SCIM provisioning information for an enterprise user",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user",
  },
  "PUT /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}": {
    name: "Set SCIM information for a provisioned enterprise user",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user",
  },
  "PATCH /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}": {
    name: "Update an attribute for a SCIM enterprise user",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user",
  },
  "DELETE /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}": {
    name: "Delete a SCIM user from an enterprise",
    documentationUrl:
      "https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise",
  },
  "GET /scim/v2/organizations/{org}/Users": {
    name: "List SCIM provisioned identities",
    documentationUrl:
      "https://docs.github.com/rest/reference/scim#list-scim-provisioned-identities",
  },
  "POST /scim/v2/organizations/{org}/Users": {
    name: "Provision and invite a SCIM user",
    documentationUrl:
      "https://docs.github.com/rest/reference/scim#provision-and-invite-a-scim-user",
  },
  "GET /scim/v2/organizations/{org}/Users/{scim_user_id}": {
    name: "Get SCIM provisioning information for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/scim#get-scim-provisioning-information-for-a-user",
  },
  "PUT /scim/v2/organizations/{org}/Users/{scim_user_id}": {
    name: "Update a provisioned organization membership",
    documentationUrl:
      "https://docs.github.com/rest/reference/scim#set-scim-information-for-a-provisioned-user",
  },
  "PATCH /scim/v2/organizations/{org}/Users/{scim_user_id}": {
    name: "Update an attribute for a SCIM user",
    documentationUrl:
      "https://docs.github.com/rest/reference/scim#update-an-attribute-for-a-scim-user",
  },
  "DELETE /scim/v2/organizations/{org}/Users/{scim_user_id}": {
    name: "Delete a SCIM user from an organization",
    documentationUrl:
      "https://docs.github.com/rest/reference/scim#delete-a-scim-user-from-an-organization",
  },
  "GET /search/code": {
    name: "Search code",
    documentationUrl:
      "https://docs.github.com/rest/reference/search#search-code",
  },
  "GET /search/commits": {
    name: "Search commits",
    documentationUrl:
      "https://docs.github.com/rest/reference/search#search-commits",
  },
  "GET /search/issues": {
    name: "Search issues and pull requests",
    documentationUrl:
      "https://docs.github.com/rest/reference/search#search-issues-and-pull-requests",
  },
  "GET /search/labels": {
    name: "Search labels",
    documentationUrl:
      "https://docs.github.com/rest/reference/search#search-labels",
  },
  "GET /search/repositories": {
    name: "Search repositories",
    documentationUrl:
      "https://docs.github.com/rest/reference/search#search-repositories",
  },
  "GET /search/topics": {
    name: "Search topics",
    documentationUrl:
      "https://docs.github.com/rest/reference/search#search-topics",
  },
  "GET /search/users": {
    name: "Search users",
    documentationUrl:
      "https://docs.github.com/rest/reference/search#search-users",
  },
  "GET /teams/{team_id}": {
    name: "Get a team (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#get-a-team-legacy",
  },
  "PATCH /teams/{team_id}": {
    name: "Update a team (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#update-a-team-legacy",
  },
  "DELETE /teams/{team_id}": {
    name: "Delete a team (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#delete-a-team-legacy",
  },
  "GET /teams/{team_id}/discussions": {
    name: "List discussions (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-discussions-legacy",
  },
  "POST /teams/{team_id}/discussions": {
    name: "Create a discussion (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#create-a-discussion-legacy",
  },
  "GET /teams/{team_id}/discussions/{discussion_number}": {
    name: "Get a discussion (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#get-a-discussion-legacy",
  },
  "PATCH /teams/{team_id}/discussions/{discussion_number}": {
    name: "Update a discussion (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#update-a-discussion-legacy",
  },
  "DELETE /teams/{team_id}/discussions/{discussion_number}": {
    name: "Delete a discussion (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#delete-a-discussion-legacy",
  },
  "GET /teams/{team_id}/discussions/{discussion_number}/comments": {
    name: "List discussion comments (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-discussion-comments-legacy",
  },
  "POST /teams/{team_id}/discussions/{discussion_number}/comments": {
    name: "Create a discussion comment (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#create-a-discussion-comment-legacy",
  },
  "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}": {
    name: "Get a discussion comment (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#get-a-discussion-comment-legacy",
  },
  "PATCH /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}": {
    name: "Update a discussion comment (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#update-a-discussion-comment-legacy",
  },
  "DELETE /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}": {
    name: "Delete a discussion comment (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#delete-a-discussion-comment-legacy",
  },
  "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions": {
    name: "List reactions for a team discussion comment (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy",
  },
  "POST /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions": {
    name: "Create reaction for a team discussion comment (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy",
  },
  "GET /teams/{team_id}/discussions/{discussion_number}/reactions": {
    name: "List reactions for a team discussion (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy",
  },
  "POST /teams/{team_id}/discussions/{discussion_number}/reactions": {
    name: "Create reaction for a team discussion (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy",
  },
  "GET /teams/{team_id}/invitations": {
    name: "List pending team invitations (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-pending-team-invitations-legacy",
  },
  "GET /teams/{team_id}/members": {
    name: "List team members (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-team-members-legacy",
  },
  "GET /teams/{team_id}/members/{username}": {
    name: "Get team member (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#get-team-member-legacy",
  },
  "PUT /teams/{team_id}/members/{username}": {
    name: "Add team member (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#add-team-member-legacy",
  },
  "DELETE /teams/{team_id}/members/{username}": {
    name: "Remove team member (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#remove-team-member-legacy",
  },
  "GET /teams/{team_id}/memberships/{username}": {
    name: "Get team membership for a user (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user-legacy",
  },
  "PUT /teams/{team_id}/memberships/{username}": {
    name: "Add or update team membership for a user (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy",
  },
  "DELETE /teams/{team_id}/memberships/{username}": {
    name: "Remove team membership for a user (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user-legacy",
  },
  "GET /teams/{team_id}/projects": {
    name: "List team projects (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#list-team-projects-legacy",
  },
  "GET /teams/{team_id}/projects/{project_id}": {
    name: "Check team permissions for a project (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-project-legacy",
  },
  "PUT /teams/{team_id}/projects/{project_id}": {
    name: "Add or update team project permissions (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#add-or-update-team-project-permissions-legacy",
  },
  "DELETE /teams/{team_id}/projects/{project_id}": {
    name: "Remove a project from a team (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#remove-a-project-from-a-team-legacy",
  },
  "GET /teams/{team_id}/repos": {
    name: "List team repositories (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#list-team-repositories-legacy",
  },
  "GET /teams/{team_id}/repos/{owner}/{repo}": {
    name: "Check team permissions for a repository (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-repository-legacy",
  },
  "PUT /teams/{team_id}/repos/{owner}/{repo}": {
    name: "Add or update team repository permissions (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#add-or-update-team-repository-permissions-legacy",
  },
  "DELETE /teams/{team_id}/repos/{owner}/{repo}": {
    name: "Remove a repository from a team (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#remove-a-repository-from-a-team-legacy",
  },
  "GET /teams/{team_id}/team-sync/group-mappings": {
    name: "List IdP groups for a team (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-idp-groups-for-a-team-legacy",
  },
  "PATCH /teams/{team_id}/team-sync/group-mappings": {
    name: "Create or update IdP group connections (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#create-or-update-idp-group-connections-legacy",
  },
  "GET /teams/{team_id}/teams": {
    name: "List child teams (Legacy)",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams/#list-child-teams-legacy",
  },
  "GET /user": {
    name: "Get the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#get-the-authenticated-user",
  },
  "PATCH /user": {
    name: "Update the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users/#update-the-authenticated-user",
  },
  "GET /user/blocks": {
    name: "List users blocked by the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-users-blocked-by-the-authenticated-user",
  },
  "GET /user/blocks/{username}": {
    name: "Check if a user is blocked by the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user",
  },
  "PUT /user/blocks/{username}": {
    name: "Block a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#block-a-user",
  },
  "DELETE /user/blocks/{username}": {
    name: "Unblock a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#unblock-a-user",
  },
  "PATCH /user/email/visibility": {
    name: "Set primary email visibility for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user",
  },
  "GET /user/emails": {
    name: "List email addresses for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-email-addresses-for-the-authenticated-user",
  },
  "POST /user/emails": {
    name: "Add an email address for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#add-an-email-address-for-the-authenticated-user",
  },
  "DELETE /user/emails": {
    name: "Delete an email address for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#delete-an-email-address-for-the-authenticated-user",
  },
  "GET /user/followers": {
    name: "List followers of the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-followers-of-the-authenticated-user",
  },
  "GET /user/following": {
    name: "List the people the authenticated user follows",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-the-people-the-authenticated-user-follows",
  },
  "GET /user/following/{username}": {
    name: "Check if a person is followed by the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user",
  },
  "PUT /user/following/{username}": {
    name: "Follow a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#follow-a-user",
  },
  "DELETE /user/following/{username}": {
    name: "Unfollow a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#unfollow-a-user",
  },
  "GET /user/gpg_keys": {
    name: "List GPG keys for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-gpg-keys-for-the-authenticated-user",
  },
  "POST /user/gpg_keys": {
    name: "Create a GPG key for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#create-a-gpg-key-for-the-authenticated-user",
  },
  "GET /user/gpg_keys/{gpg_key_id}": {
    name: "Get a GPG key for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#get-a-gpg-key-for-the-authenticated-user",
  },
  "DELETE /user/gpg_keys/{gpg_key_id}": {
    name: "Delete a GPG key for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user",
  },
  "GET /user/installations": {
    name: "List app installations accessible to the user access token",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token",
  },
  "GET /user/installations/{installation_id}/repositories": {
    name: "List repositories accessible to the user access token",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-user-access-token",
  },
  "PUT /user/installations/{installation_id}/repositories/{repository_id}": {
    name: "Add a repository to an app installation",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#add-a-repository-to-an-app-installation",
  },
  "DELETE /user/installations/{installation_id}/repositories/{repository_id}": {
    name: "Remove a repository from an app installation",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#remove-a-repository-from-an-app-installation",
  },
  "GET /user/interaction-limits": {
    name: "Get interaction restrictions for your public repositories",
    documentationUrl:
      "https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories",
  },
  "PUT /user/interaction-limits": {
    name: "Set interaction restrictions for your public repositories",
    documentationUrl:
      "https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories",
  },
  "DELETE /user/interaction-limits": {
    name: "Remove interaction restrictions from your public repositories",
    documentationUrl:
      "https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories",
  },
  "GET /user/issues": {
    name: "List user account issues assigned to the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user",
  },
  "GET /user/keys": {
    name: "List public SSH keys for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user",
  },
  "POST /user/keys": {
    name: "Create a public SSH key for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user",
  },
  "GET /user/keys/{key_id}": {
    name: "Get a public SSH key for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user",
  },
  "DELETE /user/keys/{key_id}": {
    name: "Delete a public SSH key for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user",
  },
  "GET /user/marketplace_purchases": {
    name: "List subscriptions for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user",
  },
  "GET /user/marketplace_purchases/stubbed": {
    name: "List subscriptions for the authenticated user (stubbed)",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user-stubbed",
  },
  "GET /user/memberships/orgs": {
    name: "List organization memberships for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user",
  },
  "GET /user/memberships/orgs/{org}": {
    name: "Get an organization membership for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user",
  },
  "PATCH /user/memberships/orgs/{org}": {
    name: "Update an organization membership for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user",
  },
  "GET /user/migrations": {
    name: "List user migrations",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#list-user-migrations",
  },
  "POST /user/migrations": {
    name: "Start a user migration",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#start-a-user-migration",
  },
  "GET /user/migrations/{migration_id}": {
    name: "Get a user migration status",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#get-a-user-migration-status",
  },
  "GET /user/migrations/{migration_id}/archive": {
    name: "Download a user migration archive",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive",
  },
  "DELETE /user/migrations/{migration_id}/archive": {
    name: "Delete a user migration archive",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#delete-a-user-migration-archive",
  },
  "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock": {
    name: "Unlock a user repository",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#unlock-a-user-repository",
  },
  "GET /user/migrations/{migration_id}/repositories": {
    name: "List repositories for a user migration",
    documentationUrl:
      "https://docs.github.com/rest/reference/migrations#list-repositories-for-a-user-migration",
  },
  "GET /user/orgs": {
    name: "List organizations for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-organizations-for-the-authenticated-user",
  },
  "GET /user/packages/{package_type}/{package_name}": {
    name: "Get a package for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user",
  },
  "DELETE /user/packages/{package_type}/{package_name}": {
    name: "Delete a package for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user",
  },
  "POST /user/packages/{package_type}/{package_name}/restore": {
    name: "Restore a package for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user",
  },
  "GET /user/packages/{package_type}/{package_name}/versions": {
    name:
      "Get all package versions for a package owned by the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user",
  },
  "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}": {
    name: "Get a package version for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user",
  },
  "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}": {
    name: "Delete a package version for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user",
  },
  "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore": {
    name: "Restore a package version for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user",
  },
  "POST /user/projects": {
    name: "Create a user project",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#create-a-user-project",
  },
  "GET /user/public_emails": {
    name: "List public email addresses for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-public-email-addresses-for-the-authenticated-user",
  },
  "GET /user/repos": {
    name: "List repositories for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repositories-for-the-authenticated-user",
  },
  "POST /user/repos": {
    name: "Create a repository for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user",
  },
  "GET /user/repository_invitations": {
    name: "List repository invitations for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repository-invitations-for-the-authenticated-user",
  },
  "PATCH /user/repository_invitations/{invitation_id}": {
    name: "Accept a repository invitation",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#accept-a-repository-invitation",
  },
  "DELETE /user/repository_invitations/{invitation_id}": {
    name: "Decline a repository invitation",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#decline-a-repository-invitation",
  },
  "GET /user/starred": {
    name: "List repositories starred by the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-repositories-starred-by-the-authenticated-user",
  },
  "GET /user/starred/{owner}/{repo}": {
    name: "Check if a repository is starred by the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user",
  },
  "PUT /user/starred/{owner}/{repo}": {
    name: "Star a repository for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#star-a-repository-for-the-authenticated-user",
  },
  "DELETE /user/starred/{owner}/{repo}": {
    name: "Unstar a repository for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#unstar-a-repository-for-the-authenticated-user",
  },
  "GET /user/subscriptions": {
    name: "List repositories watched by the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-repositories-watched-by-the-authenticated-user",
  },
  "GET /user/teams": {
    name: "List teams for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/teams#list-teams-for-the-authenticated-user",
  },
  "GET /users": {
    name: "List users",
    documentationUrl: "https://docs.github.com/rest/reference/users#list-users",
  },
  "GET /users/{username}": {
    name: "Get a user",
    documentationUrl: "https://docs.github.com/rest/reference/users#get-a-user",
  },
  "GET /users/{username}/events": {
    name: "List events for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-events-for-the-authenticated-user",
  },
  "GET /users/{username}/events/orgs/{org}": {
    name: "List organization events for the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-organization-events-for-the-authenticated-user",
  },
  "GET /users/{username}/events/public": {
    name: "List public events for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-public-events-for-a-user",
  },
  "GET /users/{username}/followers": {
    name: "List followers of a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-followers-of-a-user",
  },
  "GET /users/{username}/following": {
    name: "List the people a user follows",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-the-people-a-user-follows",
  },
  "GET /users/{username}/following/{target_user}": {
    name: "Check if a user follows another user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#check-if-a-user-follows-another-user",
  },
  "GET /users/{username}/gists": {
    name: "List gists for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/gists#list-gists-for-a-user",
  },
  "GET /users/{username}/gpg_keys": {
    name: "List GPG keys for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-gpg-keys-for-a-user",
  },
  "GET /users/{username}/hovercard": {
    name: "Get contextual information for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#get-contextual-information-for-a-user",
  },
  "GET /users/{username}/installation": {
    name: "Get a user installation for the authenticated app",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#get-a-user-installation-for-the-authenticated-app",
  },
  "GET /users/{username}/keys": {
    name: "List public keys for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/users#list-public-keys-for-a-user",
  },
  "GET /users/{username}/orgs": {
    name: "List organizations for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/orgs#list-organizations-for-a-user",
  },
  "GET /users/{username}/packages/{package_type}/{package_name}": {
    name: "Get a package for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#get-a-package-for-a-user",
  },
  "GET /users/{username}/packages/{package_type}/{package_name}/versions": {
    name: "Get all package versions for a package owned by a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-a-user",
  },
  "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}": {
    name: "Get a package version for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user",
  },
  "GET /users/{username}/projects": {
    name: "List user projects",
    documentationUrl:
      "https://docs.github.com/rest/reference/projects#list-user-projects",
  },
  "GET /users/{username}/received_events": {
    name: "List events received by the authenticated user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-events-received-by-the-authenticated-user",
  },
  "GET /users/{username}/received_events/public": {
    name: "List public events received by a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-public-events-received-by-a-user",
  },
  "GET /users/{username}/repos": {
    name: "List repositories for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#list-repositories-for-a-user",
  },
  "GET /users/{username}/settings/billing/actions": {
    name: "Get GitHub Actions billing for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-a-user",
  },
  "GET /users/{username}/settings/billing/packages": {
    name: "Get GitHub Packages billing for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-a-user",
  },
  "GET /users/{username}/settings/billing/shared-storage": {
    name: "Get shared storage billing for a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-a-user",
  },
  "GET /users/{username}/starred": {
    name: "List repositories starred by a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-repositories-starred-by-a-user",
  },
  "GET /users/{username}/subscriptions": {
    name: "List repositories watched by a user",
    documentationUrl:
      "https://docs.github.com/rest/reference/activity#list-repositories-watched-by-a-user",
  },
  "GET /zen": { name: "Get the Zen of GitHub" },
  "GET /repos/{owner}/{repo}/compare/{base}...{head}": {
    name: "Compare two commits",
    documentationUrl:
      "https://docs.github.com/rest/reference/repos#compare-two-commits",
  },
  "POST /content_references/{content_reference_id}/attachments": {
    name: "Create a content attachment",
    documentationUrl:
      "https://docs.github.com/rest/reference/apps#create-a-content-attachment",
  },
};
