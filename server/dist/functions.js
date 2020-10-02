"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
exports.createUser = (version, social) => ({
    version,
    profile: {
        name: '',
        location: '',
        position: '',
        image: '',
    },
    summary: [],
    info: {
        issues: 0,
        commits: 0,
        pullRequests: 0,
        pullRequestReviews: 0,
    },
    stats: [],
    jobs: [],
    projects: [],
    social,
});
exports.addLinkedInData = (_user, profile) => {
    const user = JSON.parse(JSON.stringify(_user));
    // Profile
    user.profile.name = profile.profile.name;
    user.profile.location = profile.profile.location;
    user.profile.position = profile.profile.headline;
    // Summary
    user.summary = utility_1.convertToStatements(profile.profile.summary);
    // Jobs
    if (profile.positions) {
        profile.positions.forEach((position) => {
            if (position.roles) {
                position.roles.forEach((role) => {
                    user.jobs.push({
                        title: role.title,
                        company: position.title || 'Not Specified',
                        location: role.location || 'Not Specified',
                        duration: role.date1,
                        description: utility_1.convertToStatements(role.description),
                    });
                });
            }
            else {
                user.jobs.push({
                    title: position.title,
                    company: position.companyName || 'Not Specified',
                    location: position.location || 'Not Specified',
                    duration: position.date1,
                    description: utility_1.convertToStatements(position.description),
                });
            }
        });
    }
    return user;
};
exports.addGitHubData = (_user, github) => {
    const user = JSON.parse(JSON.stringify(_user));
    user.profile.image = github.url;
    user.info.commits = github.commits;
    user.info.issues = github.issues;
    user.info.pullRequests = github.pullRequests;
    user.info.pullRequestReviews = github.pullRequestReviews;
    user.projects = github.repos.map((repo) => {
        return {
            title: repo.name,
            description: repo.description,
            stars: repo.stargazerCount,
            forks: repo.forkCount,
            link: repo.url,
            stats: repo.languages.edges
                .map((language) => {
                return {
                    name: language.node.name,
                    percentage: Math.round((language.size / repo.languages.totalSize) * 100 * 10) / 10,
                };
            })
                .sort((a, b) => b.percentage - a.percentage)
                .filter((a) => a.percentage > 0),
        };
    });
    return user;
};
exports.addLangStats = (_user, languages) => {
    const user = JSON.parse(JSON.stringify(_user));
    const langs = {};
    let totalSize = 0;
    languages.forEach((repoLangs) => {
        repoLangs.languages.edges.forEach(({ node, size }) => {
            langs[node.name] =
                (langs[node.name] || 0) + (size / repoLangs.languages.totalSize) * 100;
        });
        totalSize += 100;
    });
    for (let lang in langs) {
        user.stats.push({
            name: lang,
            percentage: Math.round((langs[lang] / totalSize) * 1000) / 10,
        });
    }
    user.stats.sort((a, b) => b.percentage - a.percentage);
    user.stats = user.stats.filter((a) => a.percentage > 0);
    return user;
};
//# sourceMappingURL=functions.js.map